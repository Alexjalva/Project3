import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {render} from 'react-dom';
import {createUseStyles} from 'react-jss';

function Events() {
  // Setting our component's initial state
  const [events, setEvents] = useState([])
  

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getAllEvents().then(res => {setEvents(res.data.data);} ).catch(err => console.log(err));
    
  }, [])


  const newArray = events.map(item => item.query = encodeURI(`${item.teams[0]} ${item.teams[1]}`));
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1>Upcoming Events</h1>
            </Jumbotron>
            {events.length ? (
              <List>
                {events.map(event => (
                  <ListItem key={event.id}>
                    <Link to={{pathname: `/events/${event.query}`, title:`${event.teams[0]} vs ${event.teams[1]}`}} >
                      <strong>
                        {event.teams[0]} vs {event.teams[1]}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
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
