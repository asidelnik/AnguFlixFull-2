import { Injectable } from '@angular/core';
import { Movie } from './movieModel';
import { HttpClient } from '@angular/common/http';



// const privateMovies: Movie[] = [];

let budget: number = 100;

@Injectable()
export class UserService {
    privateMovies: Movie[] = []; // = privateMovies;
    budgetState: string;
    pickedMovieInfo: Movie = new Movie();

    constructor() { }

    getPrivateMovies(): Movie[] {
        return this.privateMovies;
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

    isMovieNewToArray(title: string) {
        for (var movie of this.privateMovies) {
            if (title == movie.title) {
                return false;
            }
        }
        return true;
    }

    addMovieToPrivateArray(movie: Movie) {
        this.privateMovies.push(movie);
    }

    removePrivateMovie(deleteMovie: Movie) {
        let movieIndex = this.privateMovies.findIndex(movie => movie._id == deleteMovie._id);
        this.privateMovies.splice(movieIndex, 1);
        budget += deleteMovie.price;
    }



    getBudget(): number {
        return budget;
    }

    getBudgetState(): string {
        return this.budgetState;
    }

    reduceFromBudget(price: number) {
        budget -= price;
    }


    passMovieToMovieInfo(movie: Movie) {
        this.pickedMovieInfo = movie;
    }
    getPickedMovieInfo(): Movie{
        return this.pickedMovieInfo;
    }
}

