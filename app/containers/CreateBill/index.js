/*
 *
 * CreateBill
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { 
  checkCustomerAmount,
  clearAll,
  chooseSeats,
  createBill
} from './actions';
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
import { Alert  } from 'reactstrap';
import Block from '../../components/Block';
import TitleBlock from '../../components/TitleBlock';
import Label from '../../components/Label';


import InputCustomerAmount from './InputCustomerAmount';
import InputAddSeats from './InputAddSeats';
import InputSubmit from './InputSubmit';


export class CreateBill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    this.props.clearAll();
  }

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

        { 
          this.props.error 
          && <Alert color="warning" style={{ padding: "5px", width: '100%', textAlign: 'center' }}>
                <Label
                  color="black"
                  fontSize="17px"
                >
                  {this.props.errorMessage}
                </Label>
             </Alert>
        }
        <InputCustomerAmount 
          total={this.props.total}
          customerAmount={this.props.customerAmount}
          checkCustomerAmount={this.props.checkCustomerAmount}
        />

        { 
          this.props.completeLevel >= 1 
          &&  <InputAddSeats
                seats={this.props.seats}
                seatsIsSelect={this.props.seatsIsSelect}
                chooseSeats={this.props.chooseSeats}
              />
        }
        { 
          this.props.completeLevel >= 2
          && <InputSubmit 
               createBill={this.props.createBill}
             />
        }

      </Block>
    );
  }
}

CreateBill.propTypes = {
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
    checkCustomerAmount: (customerAmount) => {
      dispatch(checkCustomerAmount(customerAmount));
    },
    clearAll: () => {
      dispatch(clearAll());
    },
    chooseSeats: (seatsIsSelect) => {
      dispatch(chooseSeats(seatsIsSelect));
    },
    createBill: () => {
      dispatch(createBill());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBill);
