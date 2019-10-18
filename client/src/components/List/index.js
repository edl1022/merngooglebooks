import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function ListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  author,
  description,
  link,
  deleteBook
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-3">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>{author}</h5>
            <p>{description}</p>
            <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={link}>
              View Book
            </a></button>
            <button className="btn" id="btn" onClick={() => deleteBook()}>Delete Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
