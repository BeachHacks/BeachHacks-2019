import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import dates from "date-arithmetic";
import moment from "moment";
import { SatEvents, SunEvents } from "./events";
import TimeGrid from "react-big-calendar/lib/TimeGrid";
import { Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ListCalendar from "./ListCalendar";
import LiveNav from "./LiveNav";
import "../App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DiscordLogo from "../Images/icons/Discord-Logo-Color.png";
import DevpostLogo from "../Images/icons/Devpost-Logo.png";
import MLHLogo from "../Images/icons/MLH-Logo.png";
import TwitterLogo from "../Images/icons/Twitter-Logo-Color.png";
import InstagramLogo from "../Images/icons/Instagram-Logo.png";
import FacebookLogo from "../Images/icons/Facebook-Logo.png";
import Map from "../Images/beachhacks-map.png";
const localizer = BigCalendar.momentLocalizer(moment);

class BeachHacksWeek extends React.Component {
  render() {
    let range = BeachHacksWeek.range();
    return <TimeGrid {...this.props} range={range} eventOffset={15} />;
  }
}

BeachHacksWeek.range = () => {
  let start = new Date(2019, 4, 20, 0, 0, 0);
  let end = dates.add(start, 1, "day");

  let current = start;
  let range = [];

  range.push(current);
  current = dates.add(current, 1, "day");

  return range;
};

BeachHacksWeek.title = date => {
  return `BeachHacks Weekend: ${date.toLocaleDateString()}`;
};

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
          style={{ height: "100vh", fontSize: "18px" }}
          defaultDate={new Date(2019, 4, 20, 12, 0, 0)}
          min={this.props.min}
          showMultiDayTimes
          timeslots={1}
          eventPropGetter={event =>
            event.width === "50%"
              ? {
                  style: {
                    backgroundColor: event.color,
                    maxWidth: event.width
                  },
                  className:
                    (event.left === "0%" ? "event-left" : "event-right") +
                    (event.size === "small" ? "event-small" : "")
                }
              : {
                  style: {
                    backgroundColor: event.color,
                    maxWidth: event.width
                  },
                  className:
                    "event-left " +
                    (event.size === "small" ? "event-small" : "")
                }
          }
        />
      </div>
    );
  }
}

const SatMin = new Date(2019, 4, 20, 12, 0, 0);
const SunMin = new Date(2019, 4, 20, 0, 0, 0);

export default class Live extends Component {
  state = {
    events: SatEvents,
    min: new Date(2019, 4, 20, 12, 0, 0),
    list: false
  };

  handleSaturday() {
    if (this.state.events !== SatEvents)
      this.setState({ events: SatEvents, min: SatMin });
  }

  handleSunday() {
    if (this.state.events !== SunEvents)
      this.setState({ events: SunEvents, min: SunMin });
  }

  handleMode() {
    this.state.list
      ? this.setState({ list: false })
      : this.setState({ list: true });
  }

  render() {
    return (
      <div className="live-page">
        <div id="schedule">
          <LiveNav />
          <h1 className="schedule-header">SCHEDULE</h1>
          <Grid style={{ marginTop: "25px" }}>
            <Row>
              <Col xs={12}>
                <Col xs={12} style={{ marginBottom: "20px" }}>
                  <button
                    className="date-button"
                    onClick={this.handleMode.bind(this)}
                  >
                    {this.state.list ? (
                      <div>CALENDAR VIEW</div>
                    ) : (
                      <div>LIST VIEW</div>
                    )}
                  </button>
                </Col>
                <Col xs={12} style={{ marginBottom: "20px" }}>
                  <button
                    className="date-button"
                    onClick={this.handleSaturday.bind(this)}
                  >
                    SATURDAY, APRIL 20
                  </button>
                </Col>
                <Col xs={12}>
                  <button
                    className="date-button"
                    onClick={this.handleSunday.bind(this)}
                  >
                    SUNDAY, APRIL 21
                  </button>
                </Col>
              </Col>
              <Col xs={12} style={{marginTop:"20px"}}>
                <Row>
                  <Col xs={6} className="container">
                    <div
                      className="legend-block"
                      style={{ backgroundColor: "#6a9fc0" }}
                    >
                      <p
                        className="futura-thick"
                        style={{ textAlign: "center", margin: "0px" }}
                      >
                        MAIN EVENT
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} className="container">
                    <div
                      className="legend-block"
                      style={{ backgroundColor: "#0e5b8d" }}
                    >
                      <p
                        className="futura-thick"
                        style={{ textAlign: "center", margin: "0px" }}
                      >
                        WORKSHOPS
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="container">
                    <div
                      className="legend-block"
                      style={{ backgroundColor: "#9c63b4" }}
                    >
                      <p
                        className="futura-thick"
                        style={{ textAlign: "center", margin: "0px" }}
                      >
                        ACTIVITIES
                      </p>
                    </div>
                  </Col>
                  <Col xs={6} className="container">
                    <div
                      className="legend-block"
                      style={{ backgroundColor: "#84c3ab" }}
                    >
                      <p
                        className="futura-thick"
                        style={{ textAlign: "center", margin: "0px" }}
                      >
                        FOOD & SNACKS
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>

          {this.state.list ? (
            <ListCalendar events={this.state.events} />
          ) : (
            <MyCalendar events={this.state.events} min={this.state.min} />
          )}
        </div>
        <div id="links">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <h3 className="schedule-header">LINKS</h3>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <a href="/discord" target="_blank">
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={DiscordLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header">DISCORD</p>
                        <p className="item-text">
                          Join our Discord for event news, live updates, and
                          mentor help!
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <a href="https://beachhacks.devpost.com/" target="_blank">
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={DevpostLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header" >DEVPOST</p>
                        <p className="item-text">
                          View our prizes and submit your projects at our Devpost!
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <a href="https://hack.mlh.io/learn/" target="_blank">
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={MLHLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                      <Col xs={8}>
                        <p className="item-header">MLH HACK PACK</p>
                        <p className="item-text">
                          Find resources and tutorials for your
                          project, courtesy of MLH.
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <a
                        href="https://www.facebook.com/BeachHacks/"
                        target="_blank"
                      >
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={FacebookLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                      <a
                        href="https://www.instagram.com/beachhackscsulb/"
                        target="_blank"
                      >
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={InstagramLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                      <a
                        href="https://twitter.com/beachhackscsulb"
                        target="_blank"
                      >
                        <Col xs={4}>
                          <img
                            className="item-img"
                            src={TwitterLogo}
                            style={{ width: "100%" }}
                            alt="Discord"
                          />
                        </Col>
                      </a>
                    </Row>
                  </ListGroupItem>
                  
                </ListGroup>
              </Col>
              <Col xs={12} md={8}>
                <h3 className="schedule-header">MAP</h3>
                <ListGroupItem>
                  <img src={Map} style={{ width: "100%" }} />
                </ListGroupItem>
              </Col>
            </Row>
            <Row>
              <Col xs={12} id="parking-info">
                <h3 className="schedule-header">PARKING INFO</h3>
                <ListGroupItem>
                  <p
                    className="futura"
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      color: "#000000"
                    }}
                  >
                    Parking is available in Lot E11, with overflow parking in
                    Lot G2. Daily parking passes can be purchased at the kiosks
                    at a rate of $9 a day and $18 for the entirety of our event.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1658.1099813815092!2d-118.11556143376247!3d33.7808175179092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80dd31d783e97cd1%3A0x6a4cd0f3c5288647!2sE11%2C+Long+Beach%2C+CA+90815!3m2!1d33.7808771!2d-118.114908!4m5!1s0x80dd31db1fa57aad%3A0xc8ff9bfd14922f0a!2sCSULB+University+Student+Union%2C+North+Bellflower+Boulevard%2C+Long+Beach%2C+CA!3m2!1d33.781376699999996!2d-118.1134665!5e0!3m2!1sen!2sus!4v1555579558865!5m2!1sen!2sus"
                    style={{ width: "100%" }}
                    height="400"
                    className="parking-map"
                    frameborder="0"
                    allowfullscreen
                  />
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3316.1483715824625!2d-118.11888778530817!3d33.78266648933645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x80dd31dba16bd141%3A0x5c31edfc7cf57e07!2sG2%2C+Long+Beach%2C+CA!3m2!1d33.7838816!2d-118.1207755!4m5!1s0x80dd31db1fa57aad%3A0xc8ff9bfd14922f0a!2sCSULB+University+Student+Union%2C+1250+N+Bellflower+Blvd%2C+Long+Beach%2C+CA+90840!3m2!1d33.781376699999996!2d-118.1134665!5e0!3m2!1sen!2sus!4v1555615793963!5m2!1sen!2sus"
                    style={{ width: "50%" }}
                    height="400"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen
                  /> */}
                </ListGroupItem>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
