/*
 *
 * ReservationSeat
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectReservationSeat from './selectors';

export class ReservationSeat extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ReservationSeat"
          meta={[
            { name: 'description', content: 'Description of ReservationSeat' },
          ]}
        />
      </div>
    );
  }
}

ReservationSeat.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ReservationSeat: makeSelectReservationSeat(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationSeat);
