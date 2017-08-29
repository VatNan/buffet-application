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
  makeSelectSeatsZoneBLimit8,
  makeSelectMax,
  makeSelectTotal
} from './selectors';
import { loadSeats } from './actions';
//pouch db
import pouchdb from '../../config/pouchdb'
//components
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import Label from '../../components/Label';
import Block from '../../components/Block';
import Card from '../../components/Card';
import GroupSeat from './GroupSeat';
import TitleBlock from '../../components/TitleBlock';
import ManageBlock from './ManageBlock';

export class ManageSeats extends React.Component { // eslint-disable-line react/prefer-stateless-function
  db = pouchdb.db;
  sync = pouchdb.sync;

  componentDidMount() {
      this.props.loadSeats();
      //live data
      //not best practice
      this.db.changes({
        live: true,
        since: "now",
        filter: function (doc) {
          return doc._id.indexOf("seats") != -1;
        }
      }).on("change", () => {
        console.log("changes")
        this.props.loadSeats();
      });
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
        <ManageBlock
          max={this.props.max}
          total={this.props.total}
        />
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
  seatsZoneBLimit2: makeSelectSeatsZoneBLimit2(), // have 8 seat per 1 table
  seatsZoneBLimit4: makeSelectSeatsZoneBLimit4(), // have 4 seat per 1 table
  seatsZoneBLimit8: makeSelectSeatsZoneBLimit8(), // have 2 seat per 1 table
  max: makeSelectMax(),
  total: makeSelectTotal()
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
