import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterTextChange=(filterText)=>{
    this.setState({
      ...this.state,
      filterText: filterText,
    }
    )
  }
  handleInStockOnlyChange=(inStockOnly)=>{
    this.setState({
      inStockOnly: inStockOnly,
    }
    )
  }
  render(){
    return(
      <div>
        <SearchBar
        onFilterTextChange ={this.handleFilterTextChange}
        onInStockChange ={this.handleInStockOnlyChange}
        filterText ={this.state.filterText}
        inStockOnly = {this.state.inStockOnly}
        />
        <ProductTable 
        products ={this.props.products}
        filterText ={this.state.filterText}
        inStockOnly = {this.state.inStockOnly}        
        />
      </div>
    )
  }
}

export default FilterProductTable;

    // const nombres = (
    //   <ul>
    //     {this.props.products.map((product)=>
    //     <li key={product.name}>
    //       <h4>
    //         {product.name} {product.price}
    //       </h4>
    //     </li>
    //     )}
    //   </ul>
    // )

    // class ProductCategoryRow extends React.Component{
//   render(){
//   const category = this.props.category
//     return(
//       <tr>
//         <th colSpan='2'>
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component{
//   render(){
//     const product = this.props.product;
//     const name = product.stocked ?
//     product.name : <span style ={{color: 'red'}}>
//       {product.name}
//     </span>;
//     return(
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable  extends React.Component {
//   render(){
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return(
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//           <tbody>{rows}</tbody>
//         </thead>
//       </table>
//     )
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   handleFilterTextChange = (e) =>{
//     this.props.onFilterTextChange([e.target.name] = e.target.value);
//   }
  
//   handleInStockChange=(e)=> {
//     this.props.onInStockChange(e.target.checked);
//   }

//   // handleInStockChange = (e) =>{
//   //   this.props.onInStockChange([e.target.name] = e.target.checked);
//   // }


//   // handleInStockChange=(e)=> {
//   //   this.props.onInStockChange([e.target.name] = e.target.checked);
//   // }

//   render(){
//     // const filterText = this.props.filterText;
//     // const inStockOnly = this.props.inStockOnly;

//     return(
//       <form>
//         <input
//         onChange={this.handleFilterTextChange}
//         name = 'filterText'
//         value = {this.props.filterText}
//         type="text"
//         placeholder='Search'/>
//         <p>
//           <input
//           name = 'inStockOnly'
//           type="checkbox"
//           checked ={this.props.inStockOnly}
//           onChange={this.handleInStockChange}/>
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }