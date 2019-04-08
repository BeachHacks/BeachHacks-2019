import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import dates from 'date-arithmetic';
import moment from 'moment';
import { SatEvents, SunEvents } from './events';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import { Grid, Row, Col } from 'react-bootstrap';
import "../App.css"
import "react-big-calendar/lib/css/react-big-calendar.css";

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
        <BigCalendar
          className="reg calendar"
          localizer={localizer}
          toolbar={false}
          defaultView="week"
          views={{ week: BeachHacksWeek }}
          events={this.props.events}
          style={{ height: "50vh", fontSize: "18px" }}
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
      this.setState({ events: SunEvents, min:SunMin })
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
      </div>
    )
  }
}