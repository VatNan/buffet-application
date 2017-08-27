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
//components
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import Label from '../../components/Label';
import Block from '../../components/Block';
import Card from '../../components/Card';

export class ReservationSeat extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Block
        direction="column"
        flex="1"
      >
        <Helmet
          title="ReservationSeat"
          meta={[
            { name: 'description', content: 'Description of ReservationSeat' },
          ]}
        />
        <Card
          border="0px"
          direction="column"
          bgColor="#1c51a2"
          padding="6px 0px"
          alignItems="center"
          haveShadow={true}
        >
          <Label
            fontSize="30px"
          >
            จองโต๊ะ
          </Label>
        </Card>

        <Block
          flex="1"
          bgColor="white"
          padding="6px"
          direction="column"
          margin="25px 0px"
        >
          <Label
            fontSize="20px"
            color="black"
          >

            Zone A (have 1 counter)
          </Label>
          <Label
            fontSize="20px"
            color="black"
          >

            : (1 counter: 12 seat)
          </Label>
          <Block style={{ display: 'flex', width: '100%' }}>
            <ButtonGroup className="row justify-content-center" style={{ flex: 1 }}>
              <Button className="col-4 col-sm-3 m-1" size="lg">A01</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A02</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A03</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A04</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A05</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A06</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A07</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A08</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A09</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A10</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A11</Button>
              <Button className="col-4 col-sm-3 m-1" size="lg">A12</Button>
            </ButtonGroup>
          </Block>
        </Block>
        <Block
          flex="1"
          bgColor="white"
          padding="6px"
          direction="column"
          margin="25px 0px"
        >
          <Label
            fontSize="20px"
            color="black"
          >
            Zone B (have 2 table)
          </Label>
          <Label
            fontSize="20px"
            color="black"
          >
            : (1 table: 8 seat)
          </Label>


          <Block style={{ display: 'flex', width: '100%' }}>
            <ButtonGroup className="row justify-content-center" style={{ flex: 1 }}>
              <Button className="col-4 m-2" size="lg">B01</Button>
              <Button className="col-4 m-2" size="lg">B02</Button>
            </ButtonGroup>
          </Block>

        </Block>

        <Block
          flex="1"
          bgColor="white"
          padding="6px"
          direction="column"
          margin="25px 0px"
        >
          <Label
            fontSize="20px"
            color="black"
          >
            Zone B (have 6 table)
          </Label>
          <Label
            fontSize="20px"
            color="black"
          >
            : (1 table: 4 seat)
          </Label>

          <Block style={{ display: 'flex', width: '100%' }}>
            <ButtonGroup className="row justify-content-center" style={{ flex: 1 }}>
              <Button className="col-4 m-2" size="lg">B03</Button>
              <Button className="col-4 m-2" size="lg">B04</Button>
              <Button className="col-4 m-2" size="lg">B05</Button>
              <Button className="col-4 m-2" size="lg">B06</Button>
              <Button className="col-4 m-2" size="lg">B07</Button>
              <Button className="col-4 m-2" size="lg">B08</Button>
            </ButtonGroup>
          </Block>

        </Block>


        <Block
          flex="1"
          bgColor="white"
          padding="6px"
          direction="column"
          margin="25px 0px"
        >
          <Label
            fontSize="20px"
            color="black"
          >
            Zone B (have 4 table)
          </Label>
          <Label
            fontSize="20px"
            color="black"
          >
            : (1 table: 2 seat)
          </Label>

          <Block style={{ display: 'flex', width: '100%' }}>
            <ButtonGroup className="row justify-content-center" style={{ flex: 1 }}>
              <Button className="col-4 m-2" size="lg">B09</Button>
              <Button className="col-4 m-2" size="lg">B10</Button>
              <Button className="col-4 m-2" size="lg">B11</Button>
              <Button className="col-4 m-2" size="lg">B12</Button>
            </ButtonGroup>
          </Block>

        </Block>
      </Block>
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
