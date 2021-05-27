import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import AUTH from "../utils/AUTH";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { DeleteBtn } from "../components/DeleteBtn";
import { AddBtn } from "../components/AddBtn";
const tempArray = [];

function Events() {
  // Setting our component's initial state
  const [events, setEvents] = useState([]);


  // Load all books and store them with setBooks
  useEffect(() => {
    setEvents(tempArray);
    AUTH.getUser().then(res => {
      API.getUserEvents(res.data.user.username).then(res => {
        res.data.events.map(eventId => API.getSavedEvent(eventId).then(event => tempArray.push(event.data)));
        }).catch(err => console.log(err));
    });
    setEvents(tempArray);
  }, [])

  
  return (
    
    <Container fluid>
      {console.log(events)}
      <Row>
        <Col size="lg-12">
          <Jumbotron>
            <h1>Upcoming Events</h1>
          </Jumbotron>
          {tempArray.length ? (
            <List>
              {events.map(event => (
                <ListItem key={event.id}>
                  <Link to={{ pathname: `/events/${event.title}`, title: `${event.title}` }} >
                    <strong>
                      {event.title}
                    </strong>
                  </Link>
                  <p>
                    Odds: {event.odds}
                  </p>
                  <DeleteBtn onClick={() => console.log(event._id)} />
                  {/* <AddBtn onClick={() => {
                    API.saveEvent(event);
                    API.saveToUser(user, event.id)
                  }} /> */}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default Events;
