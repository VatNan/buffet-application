/*
 *
 * CreateBill
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCreateBill from './selectors';

export class CreateBill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CreateBill"
          meta={[
            { name: 'description', content: 'Description of CreateBill' },
          ]}
        />
      </div>
    );
  }
}

CreateBill.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CreateBill: makeSelectCreateBill(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBill);
