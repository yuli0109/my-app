import React, {Component} from 'react'
import {fetchWeather} from '../actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Search the weather by city name..."
          type="text"
          onChange={this.handleChange}
          value={this.state.term}
          />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Search</button>
        </span>
      </form>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar)
