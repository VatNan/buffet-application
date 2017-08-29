/*
 *
 * CreateBill
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCompleteLevel,
  makeSelectCustomerAmount,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectGuide,
  makeSelectLoading,
  makeSelectMax,
  makeSelectSeatsIsSelect,
  makeSelectTotal,
  makeSelectSeats
} from './selectors';
//components
import Block from '../../components/Block';
import TitleBlock from '../../components/TitleBlock';

import InputCustomerAmount from './InputCustomerAmount';
import InputAddSeats from './InputAddSeats';
import InputSubmit from './InputSubmit';

// var test = 'one';

export class CreateBill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log("bill -.", this.props)
    return (
      <Block
        direction="column"
        flex="1"
        margin="90px 0px 0px 0px"
      >
        <Helmet
          title="สร้างบิล"
          meta={[
            { name: 'description', content: 'Description of CreateBill' },
          ]}
        />
        <TitleBlock 
          title="สร้างบิล"
        />
        
        <InputCustomerAmount />
        <InputAddSeats />
        <InputSubmit />

      </Block>
    );
  }
}

CreateBill.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // CreateBill: makeSelectCreateBill(),
  completeLevel: makeSelectCompleteLevel(),
  customerAmount: makeSelectCustomerAmount(),
  error: makeSelectError(),
  errorMessage: makeSelectErrorMessage(),
  guide: makeSelectGuide(),
  loading: makeSelectLoading(),
  max: makeSelectMax(),
  seatsIsSelect: makeSelectSeatsIsSelect(),
  total: makeSelectTotal(),
  seats: makeSelectSeats()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBill);
