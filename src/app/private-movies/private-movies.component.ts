import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';
import { Movie } from '../movieModel';

@Component({
    selector: 'app-private-movies',
    templateUrl: './private-movies.component.html',
    styleUrls: ['./private-movies.component.css']
})
export class PrivateMoviesComponent implements OnInit {
    title: string = 'Select movies from below to add to your collection';
    privateMovies: Movie[] = [];
    currentSearchTerm: string;
    deleteMoviesFromPrivate: boolean;
    showselect: boolean = false;

    constructor(private moviesService: MoviesService, private userService: UserService) { }

    ngOnInit() {
        this.privateMovies = this.userService.getPrivateMovies();
    }

    searchMovie(searchTerm: string) {
        // let foundMovie = this.privateMovies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
        this.currentSearchTerm = searchTerm;
    }

    get budgetState() {
        return this.userService.getBudgetState();
    }

    allowRemoveMovies() {
        this.deleteMoviesFromPrivate = !this.deleteMoviesFromPrivate;
    }

    removePrivateMovie(movie: Movie) {
        this.userService.removePrivateMovie(movie);
    }
}
