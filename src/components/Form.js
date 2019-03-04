import React, { Component } from 'react';

const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email : '',
      error: true,
      touch: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email);
    this.setState({ 
      email: '',
      error: true
    })
  }
  
  handleChange = (event) => {
    this.setState({
      email: event.target.value,
      error:  !validator.test(event.target.value)
    })
  }

  handleValidate = (event => {
    this.setState({
      touch: true
    })
  })

  render = () => (
    <form className="Form" onSubmit={this.handleSubmit}>
      <div className="field">
        <label className="label">email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input" value={this.state.email} onChange={this.handleChange} onBlur={this.handleValidate}/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        { ( this.state.error === false && this.state.touch === true ) && <p className="help is-success">This email is available</p> }
        { ( this.state.error === true && this.state.touch === true ) && <p className="help is-danger">This email is invalid</p> }
      </div>

      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </form>
  );
}