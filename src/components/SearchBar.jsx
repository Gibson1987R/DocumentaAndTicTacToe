import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }

  handleFilterTextChange = (e) =>{
    this.props.onFilterTextChange([e.target.name] = e.target.value);
  }
  
  handleInStockChange=(e)=> {
    this.props.onInStockChange(e.target.checked);
  }

  // handleInStockChange = (e) =>{
  //   this.props.onInStockChange([e.target.name] = e.target.checked);
  // }


  // handleInStockChange=(e)=> {
  //   this.props.onInStockChange([e.target.name] = e.target.checked);
  // }

  render(){
    // const filterText = this.props.filterText;
    // const inStockOnly = this.props.inStockOnly;

    return(
      <form>
        <input
        onChange={this.handleFilterTextChange}
        name = 'filterText'
        value = {this.props.filterText}
        type="text"
        placeholder='Search'/>
        <p>
          <input
          name = 'inStockOnly'
          type="checkbox"
          checked ={this.props.inStockOnly}
          onChange={this.handleInStockChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;