import React, { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleCange = event => {
    this.setState({ message: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleCange}
        ></textarea>
        <button type="submit">Add new Todo</button>
      </form>
    );
  }
}
