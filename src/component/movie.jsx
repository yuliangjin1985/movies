import React, { Component } from 'react';
import  { getMovies } from '../services/fakeMovieService';
import Like from './common/Like';
import Pagination from './common/pagination';
import {pagenate} from '../utils/paginate';
import PropTypes from 'prop-types';
import ListGroup from './common/listGroup'
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = { 
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        activeGenre: 0
     }

     //get data from service and from server
     componentDidMount () {
        this.setState({movies: getMovies(), genres: getGenres()});
     }

     handleChange = (movie) => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = {...movies[index]}; 
         movies[index].liked = !movies[index].liked;
         this.setState( {movies} );
     }

    handleDelete(movie) {
        const newMovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: newMovies});
    }

    handlePageChange = page => {
        console.log("Before update ", this.state);
        this.setState({currentPage : page});
        console.log("After update ", this.state);
    }

    handleGenreSelect = genre => {
        console.log("Genre select ", genre);
    }
    render() { 
        const {length: counter} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies, genres} = this.state;
        const movies = pagenate(allMovies, currentPage, pageSize);
        if(counter === 0) return <p>There are no movies.</p>;
        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup 
                        items={genres} 
                        item={this.state.activeGenre} 
                        propterValue={"_id"}
                        propterText={"name"}
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
                    <p>There are {counter} movies available.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            { movies.map( movie => (
                                <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.title}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.title}</td>
                                <td><Like liked={movie.liked} onClick = {() => this.handleChange(movie)} /></td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination itemsCount={counter} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
                </div>
                
            </div>
        );
    }
}

export default Movies;
