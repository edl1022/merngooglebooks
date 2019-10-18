import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //Don't need
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchNewBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));
  };

  handleSavedBook = data => {
    console.log("This is the book data from handleSavedBook:")
    console.log(data);
    API.saveBook(data)
    .then(res => alert("Your book was saved! 😄") && this.loadBooks())
   
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            {/* don't need, only need one search input */}
            <form>
              <Input
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
                name="bookSearch"
                placeholder="Harry Potter"
              />
              <FormBtn
                type="success"
                className="input-lg"
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    console.log(this.state);
                    return (
                      <BookListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        link={book.volumeInfo.infoLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        handleSavedBook={() => this.handleSavedBook({
                          title: book.volumeInfo.title,
                          author: book.volumeInfo.authors[0],
                          id: book.id,
                          link: book.volumeInfo.infoLink,
                          thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
                          description: book.volumeInfo.description
                        })}
                      />
                    );
                  })}
                </BookList>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
