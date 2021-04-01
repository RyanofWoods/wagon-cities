import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

import City from './city';

class CityList extends Component {
  static defaultProps = {
    flats: [{ name: "Lyon", address: "23 Rue Paul Montrochet, 69002 Lyon", slug: "lyon" }]
  }

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <ul className="cities">
        {
          cities.map((city) => {
            return (<City city={city} />);
          })
        }
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
