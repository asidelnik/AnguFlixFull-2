import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movieModel';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MoviesService implements OnInit {
    //public allMovies: Movie[];  // private
    public number: number;
    public movieSubject: Subject<Movie[]>;
    public movieUpdated: Observable<Movie[]>;


    constructor(private http: HttpClient) {
        this.movieSubject = new Subject<Movie[]>();
        this.movieUpdated = this.movieSubject.asObservable();
    }

    ngOnInit() {}

    getAllMovies(): Observable<Movie[]>  {
        return this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies')
    }
}