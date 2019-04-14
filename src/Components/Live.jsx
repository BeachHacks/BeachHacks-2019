import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import dates from 'date-arithmetic';
import moment from 'moment';
import { SatEvents, SunEvents } from './events';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Navigation from './Navigation';
import "../App.css"
import "react-big-calendar/lib/css/react-big-calendar.css";
import DiscordLogo from "../Images/icons/Discord-Logo-Color.png";
import DevpostLogo from "../Images/icons/Devpost-Logo.png";
import MLHLogo from "../Images/icons/MLH-Logo.png";

const localizer = BigCalendar.momentLocalizer(moment);


class BeachHacksWeek extends React.Component {
  render() {
    let range = BeachHacksWeek.range();
    return <TimeGrid {...this.props} range={range} eventOffset={15} />
  }
}

BeachHacksWeek.range = () => {
  let start = new Date(2019, 4, 20, 0, 0, 0);
  let end = dates.add(start, 1, "day");

  let current = start;
  let range = [];

  range.push(current);
  current = dates.add(current, 1, 'day');


  return range;
}

BeachHacksWeek.title = date => {
  return `BeachHacks Weekend: ${date.toLocaleDateString()}`;
}

class MyCalendar extends Component {



  render() {
    return (

      <div className="container">
        <Navigation />
        <BigCalendar
          className="reg calendar"
          localizer={localizer}
          toolbar={false}
          defaultView="week"
          views={{ week: BeachHacksWeek }}
          events={this.props.events}
          style={{ height: "100vh", fontSize: "18px" }}
          defaultDate={new Date(2019, 4, 20, 12, 0, 0)}
          min={this.props.min}
          showMultiDayTimes
          popup
          timeslots={1}
          eventPropGetter={event => ({
            style: {
              backgroundColor: event.color,
            },
          })}
        />
      </div>
    )
  }
}


const SatMin = new Date(2019, 4, 20, 12, 0, 0);
const SunMin = new Date(2019, 4, 20, 0, 0, 0);

export default class Live extends Component {

  state = {
    events: SatEvents,
    min: new Date(2019, 4, 20, 12, 0, 0)
  }

  handleSaturday() {
    if (this.state.events !== SatEvents)
      this.setState({ events: SatEvents, min: SatMin })
  }

  handleSunday() {
    if (this.state.events !== SunEvents)
      this.setState({ events: SunEvents, min: SunMin })
  }

  render() {
    return (
      <div className="live-page">
        <h1 className="schedule-header">SCHEDULE</h1>
        <Grid style={{ marginTop: "100px" }}>
          <Row>
            <Col xs={6}>
              <button className="date-button" onClick={this.handleSaturday.bind(this)}>SATURDAY, APRIL 20</button>
            </Col>
            <Col xs={6}>
              <button className="date-button" onClick={this.handleSunday.bind(this)}>SUNDAY, APRIL 21</button>
            </Col>
          </Row>
        </Grid>

        <MyCalendar events={this.state.events} min={this.state.min} />

        <div id="links">
          <Grid>
            <Row>
              <Col xs={12} sm={4}>
                <h3 className="schedule-header">LINKS</h3>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <a href="/discord" target="_blank">
                        <Col xs={4}>
                          <img className="item-img" src={DiscordLogo} style={{ width: "100%" }} alt="Discord" />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header">Discord</p>
                        <p className="item-text">Join our Discord for event news, live updates, and mentor help!</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <a href="https://beachhacks.devpost.com/" target="_blank">
                        <Col xs={4}>
                          <img className="item-img" src={DevpostLogo} style={{ width: "100%" }} alt="Discord" />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header">Devpost</p>
                        <p className="item-text">Submit your project to Devpost to participate and demo at BeachHacks!</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <a href="https://hack.mlh.io/learn/" target="_blank">
                        <Col xs={4}>
                          <img className="item-img" src={MLHLogo} style={{ width: "100%" }} alt="Discord" />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header">MLH</p>
                        <p className="item-text">Submit your project to Devpost to participate and demo at BeachHacks!</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Grid>

        </div>

      </div>
    )
  }
}