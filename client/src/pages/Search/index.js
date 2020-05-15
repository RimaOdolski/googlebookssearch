import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css';
import axios from 'axios';

function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios (
                `https://www.googleapis.com/books/v1/volumes?q=${search}`
            );
            
            console.log(result.data.items);
            setBooks(result.data.items);
        };
        fetchData();

    }, [search]);

    return (
      <Container fluid>
        <Row>
            <Col size="sm-12">
                <Jumbotron>
                    <h1>Google Books Search</h1>
                    <h4>Search for and Save Books of Interest</h4>
                </Jumbotron>
            </Col>
        </Row>
        
        <Row>
            <Col size="md-6 sm-12">
                <Card className="cards">
                    <header id="searchHeader">
                        <i className="fas fa-book"></i>Book Search
                    </header>
                    <CardContent>
                        <input
                            type='text'
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                        />
                        <button type="button" onClick={() => setSearch(query)}>
                            Search
                        </button>

                        {}
                    </CardContent>
                </Card>
            </Col>

            <Col size="md-6 sm-12">
                <Card className="columns">
                    <header id="resultsHeader">
                        Results
                    </header>
                    <h1>Search For a Book To Begin!</h1>
                    {books.length ? (
                    <List>
                        {books.map(book => {
                        return (
                            <ListItem key={book.id}>
                            <a href={"/books/" + book.id}>
                                <strong>
                                {book.volumeInfo.title} by {book.volumeInfo.authors}
                                </strong>
                            </a>
                            <DeleteBtn onClick={() =>{}} />
                            </ListItem>
                        );
                        })}
                    </List>
                    ) : (
                    <h3>No Results to Display</h3>
                    )}
                </Card>
            </Col>
        </Row>
      </Container>
    );
  }


export default Search;