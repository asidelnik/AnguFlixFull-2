import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
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
    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        // this.allMovies = this.moviesService.getAllMovies();
        // console.log(this.allMovies);
        
        // this.allMovies = this.moviesService.allMovies;
        // console.log(this.moviesService.allMovies);
        this.number = this.moviesService.number;
        console.log(this.number);

        this.getMovies();
        // console.log("all-movies ngOnInit");
        // console.log(this.allMovies);
    }

    getMovies(): void {
        // console.log("getMovies called");
        this.allMovies = this.moviesService.getAllMovies();
        console.log(this.allMovies);
    }


    searchMovie(searchTerm: string) {
        // let foundMovie = this.movies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
        this.currentSearchTerm = searchTerm;
    }

    addMovieToPrivate(movie: Movie) {
        this.moviesService.addMovieToPrivateMovies(movie);
    }
}
