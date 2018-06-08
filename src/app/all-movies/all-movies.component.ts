import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';
import { Movie } from '../movieModel';

@Component({
    selector: 'app-all-movies',
    templateUrl: './all-movies.component.html',
    styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
    allMovies: Movie[];
    currentSearchTerm: string;
    showselect: boolean = false;
    public number: number;
    constructor(private moviesService: MoviesService, private userService: UserService) { }

    ngOnInit() {
        this.moviesService.getAllMovies().subscribe((results) => {
            this.allMovies = results;            
        });
    }

    searchMovie(searchTerm: string) {
        // let foundMovie = this.movies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
        this.currentSearchTerm = searchTerm;
    }

    addMovieToPrivate(movie: Movie) {
        this.userService.addMovieToPrivateMovies(movie);
    }
}