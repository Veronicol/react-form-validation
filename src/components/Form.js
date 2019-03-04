import React, { Component } from 'react';

export default class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email : '',
      error: true
    }
  }

  validator = {
    email: v =>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(v).toLowerCase())
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
    let newError = false;
    if ( !this.validator.email ) {
      newError = true;
    }
    this.setState({
      email: event.target.value,
      error: newError
    })
  }

  render = () => (
    <form className="Form" onSubmit={this.handleSubmit}>
      <div className="field">
        <label className="label">email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input" value={this.state.email} onChange={this.handleChange}/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        { ( this.state.error === false ) && <p className="help is-success">This email is available</p> }
        { ( this.state.error === true ) && <p className="help is-danger">This email is invalid</p> }
      </div>

      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </form>
  );
}