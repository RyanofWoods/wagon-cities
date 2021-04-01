import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render () {
    return (
      <li className="list-group-item" onClick={this.handleClick} >
        {this.props.city.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.city
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
