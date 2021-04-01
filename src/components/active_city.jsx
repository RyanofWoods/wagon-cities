import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render () {
    let content = (<div className="active-city" />);
    if (this.props.selectedCity) {
      const { name, address, slug } = this.props.selectedCity;
      const src = `https://kitt.lewagon.com/placeholder/cities/${slug}`;
      content = (
        <div className="active-city">
          <h3>{name}</h3>
          <p>{address}</p>
          <img src={src} alt="" />
        </div>
      );
    }
    return (content);
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
