/*
 *
 * ManageSeats
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLoading,
  makeSelectGuide,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectSeatsZoneA,
  makeSelectSeatsZoneBLimit2,
  makeSelectSeatsZoneBLimit4,
  makeSelectSeatsZoneBLimit8
} from './selectors';
import { loadSeats } from './actions';
//components
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import Label from '../../components/Label';
import Block from '../../components/Block';
import Card from '../../components/Card';
import GroupSeat from './GroupSeat';
import TitleBlock from '../../components/TitleBlock';
import ManegeBlock from './ManegeBlock';

export class ManageSeats extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
      this.props.loadSeats();
  }

  render() {
    return (
      <Block
        direction="column"
        flex="1"
        margin="90px 0px 0px 0px"
      >
        <Helmet
          title="จัดการที่นั่ง"
          meta={[
            { name: 'description', content: 'Description of ManageSeats' },
          ]}
        />
        <TitleBlock 
          title="จัดการที่นั่ง"
        />
        <ManegeBlock/>
        <GroupSeat
          title="Zone A (have 1 counter)"
          description="(1 counter: 12 seat)"
          seats={this.props.seatsZoneA}
        >
        </GroupSeat>
        <GroupSeat
          title="Zone B (have 2 table)"
          description="(1 table: 8 seat)"
          seats={this.props.seatsZoneBLimit8}
        >
        </GroupSeat>
        <GroupSeat
          title="Zone B (have 6 table)"
          description="(1 counter: 4 seat)"
          seats={this.props.seatsZoneBLimit4}
        >
        </GroupSeat>
        <GroupSeat
          title="Zone B (have 4 table)"
          description="(1 counter: 2 seat)"
          seats={this.props.seatsZoneBLimit2}
        >
        </GroupSeat>
        
      </Block>
    );
  }
}

ManageSeats.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // ManageSeats: makeSelectManageSeats(),
  loading: makeSelectLoading(),
  guide: makeSelectGuide(),
  error: makeSelectError(),
  errorMessage: makeSelectErrorMessage(),
  seatsZoneA: makeSelectSeatsZoneA(),
  seatsZoneBLimit8: makeSelectSeatsZoneBLimit2(), // have 8 seat per 1 table
  seatsZoneBLimit4: makeSelectSeatsZoneBLimit4(), // have 4 seat per 1 table
  seatsZoneBLimit2: makeSelectSeatsZoneBLimit8(), // have 2 seat per 1 table
});

function mapDispatchToProps(dispatch) {
  // return {
  //   dispatch,
  // };
  return { 
    loadSeats: () => {
      dispatch(loadSeats()); 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSeats);
