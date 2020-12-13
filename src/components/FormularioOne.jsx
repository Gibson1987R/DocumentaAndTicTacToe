import React from 'react';

class FormularioOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        direction: 'Please write an essay about your favorite DOM element.',
        flavor: 'coconut'
      }
    }
  }

  handleChange = (e) =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value,
      },
    });
  };

  handleSubmit = e =>{
    e.preventDefault();
    alert(`A name, direction and flavor was submitted: ${this.state.form.name}, ${this.state.form.direction}  y ${this.state.form.flavor} `)
  }

  render(){
    return(
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input 
              type="text" 
              name ='name'
              value={this.state.form.name}
              onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Dirección:
            </label>
            <textarea 
            name="direction" 
            onChange={this.handleChange}
            value={this.state.form.direction}/>
          </div>
          <label >
            <select 
            name="flavor" 
            value={this.state.form.flavor} 
            onChange={this.handleChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value='Submit'/>
        </form>
      </div>
    )
  }
}

export default FormularioOne;