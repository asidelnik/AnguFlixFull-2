import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movieModel';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


const privateMovies: Movie[] = [];

let budget: number = 10;

@Injectable()
export class MoviesService implements OnInit {
    //public allMovies: Movie[];  // private
    public number: number;
    privateMovies: Movie[] = privateMovies;
    budgetState: string;

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

    aNumber() {
        this.number = 5;
        console.log(this.number);
    }






    getPrivateMovies(): Movie[] {
        return privateMovies;
    }

    getBudget(): number {
        return budget;
    }

    getBudgetState(): string {
        return this.budgetState;
    }

    addMovieToPrivateArray(movie: Movie) {
        privateMovies.push(movie);
        console.log(this.privateMovies);
    }

    reduceFromBudget(price: number) {
        budget -= price;
    }

    isMovieNewToArray(title: string) {
        for (var movie of privateMovies) {
            if (title == movie.title) {
                return false;
            }
        }
        return true;
    }

    addMovieToPrivateMovies(movie: Movie) {
        if (budget >= movie.price && this.isMovieNewToArray(movie.title)) {
            this.addMovieToPrivateArray(movie);
            this.reduceFromBudget(movie.price);
            this.budgetState = ``;
        } else if (budget > 0 && budget < movie.price) {
            this.budgetState = `You don't have enough money, you only have $${budget} left`;
        } else if (budget >= movie.price && (!this.isMovieNewToArray(movie.title))) {
            this.budgetState = `${movie.title} is already on your collection`;
        } else {
            this.budgetState = `You can't purchase ${movie.title}, your budget is empty`;
        }
    }

    removeMovieFromPrivateMovieArray(movieToDelete: Movie) {
        let movieIndex = this.privateMovies.findIndex(m => m.id == movieToDelete.id);
        this.privateMovies.splice(movieIndex, 1);
        // this.privateMovies = this.privateMovies.filter((movie) => {
        //   return movie.id !== movieToDelete.id;
        // });
        // return this.privateMovies;
    }
}


// .subscribe((data) => {
        //     console.log(data);
        //     //this.allMovies = data;
        //     console.log(this.allMovies);
        // })
        //return this.allMovies;