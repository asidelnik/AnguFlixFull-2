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
    title: string = 'Select movies to add to your collection';
    privateMovies: Movie[] = [];
    currentSearchTerm: string;
    deleteMoviesFromPrivate: boolean;
    showselect: boolean = false;

    constructor(private moviesService: MoviesService, private userService: UserService) { }

    ngOnInit() {
        this.privateMovies = this.userService.getPrivateMovies();
    }

    searchMovie(searchTerm: string) {
        this.currentSearchTerm = searchTerm;
    }

    allowRemoveMovies() {
        this.deleteMoviesFromPrivate = !this.deleteMoviesFromPrivate;
    }

    removePrivateMovie(movie: Movie) {
        this.userService.removePrivateMovie(movie);
    }
}
