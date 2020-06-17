import React , { Component } from 'react';

class Form extends Component{
  initialState = {
    name:'',
    job:''
  }

  state = this.initialState

  handleChange = event => {
    const { name,value } = event.target

    this.setState({
      [name]:value,
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render(){
    const { name,job } = this.state

    return(
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" id="name" value={name} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="job">Job</label>
          <input type="text" name="job" className="form-control" id="job" value={job} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary form-control" onClick={this.submitForm} value="Submit"/>
        </div>
      </form>
    )
  }
}

export default Form