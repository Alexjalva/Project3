import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import AUTH from "../utils/AUTH";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { DeleteBtn } from "../components/DeleteBtn";
import {AddBtn} from "../components/AddBtn";


function Events(props) {
  // Setting our component's initial state
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState("");
  

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getAllEvents().then(res => {setEvents(res.data.data);} ).catch(err => console.log(err));
    AUTH.getUser().then(res => {
      if(res.data.user != null){
        setUser(res.data.user._id);
      }
      else{
        setUser(null);
      }
        
    })
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
                    <p>
                      Odds: {event.sites[0].odds.h2h[0]}
                    </p>
                    <AddBtn onClick={() => {API.saveEvent(event);
                                            API.saveToUser(user, event.id)} }/>
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
