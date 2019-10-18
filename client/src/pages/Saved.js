import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {  Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
    console.log(this.state)
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => {
        console.log(res)
        this.setState({ savedBooks: res})
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Jumbotron>
      <h1>Books On My List</h1>
    </Jumbotron>
      <Container fluid>
        {console.log(this.state)}
            {this.state.savedBooks.length > 0 ? (
              <List>
                {this.state.savedBooks.map(book => (
                  <ListItem
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    link={book.link}
                    thumbnail={book.thumbnail}
                    description={book.description}
                    deleteBook={() => this.deleteBook(book._id)}
                  />

                ))}
              </List>
            ) : (
              <h1 id="message" className="text-center">No Results to Display</h1>
            )}
      </Container>
      </div>
    );
  }
}

export default Saved;