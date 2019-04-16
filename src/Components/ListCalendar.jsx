import React, { Component } from "react";
import { ListGroup, ListGroupItem, Grid, Col, Row } from "react-bootstrap";

export default class ListCalendar extends Component {
  render() {
    return (
      <div className="container">
        <ListGroup className="list-view">
          {this.props.events.map(event => {
            console.log(event);
            const start =
            (event.start.getHours() === 0 ? "12:00" :
              (event.start.getHours() < 10 ? "0" : "") +
              (event.start.getHours() > 12
                ? event.start.getHours() - 12
                : event.start.getHours()) +
              ":" +
              (event.start.getMinutes() < 10 ? "0" : "") +
              event.start.getMinutes());
            const end =
              (event.end.getHours() < 10 ? "0" : "") +
              (event.end.getHours() > 12
                ? event.end.getHours() - 12
                : event.end.getHours()) +
              ":" +
              (event.end.getMinutes() < 10 ? "0" : "") +
              event.end.getMinutes();

            const AMPM = (event.start.getHours() < 12 ? "AM" : "PM");

            return (
              <ListGroupItem
                className="futura"
                style={{ backgroundColor: `${event.color}` }}
              >
                <Grid style={{ width: "100%" }}>
                  <Row>
                    <Col xs={4}>
                      <p>
                        <b>
                          {start} - {end} {AMPM}
                        </b>
                      </p>
                    </Col>
                    <Col xs={8}>
                      <p>{event.title}</p>
                    </Col>
                  </Row>
                </Grid>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
