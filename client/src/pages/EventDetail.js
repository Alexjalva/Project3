import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function EventDetail( props) {
  const [headlines, setHeadlines] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {query} = useParams()
  useEffect(() => {
    API.getHeadlines(query)
      .then(res => {setHeadlines(res.data.articles);})
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12 ">
            <Jumbotron>
              <h1>
                {/* {book.title} by {book.author} */}
                {query}
                {console.log()}
              </h1>
            </Jumbotron>
            {headlines.length ? (
              <List>
                {headlines.map(headline => (
                  <ListItem key={headline.id}>
                    <a href={headline.url}>
                      <strong>
                        {headline.title} 
                      </strong>
                    </a>
                    
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


export default EventDetail;
