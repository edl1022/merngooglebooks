import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";


// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the Google Books api call
export function BookListItem (props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title} by {props.author}</h3>
            <p>{props.description}</p>
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              Go to book!
            </a>
            <button className="btn" id="btn" onClick={() => props.handleSavedBook()}>Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}