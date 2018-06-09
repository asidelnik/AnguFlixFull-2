import { Injectable } from '@angular/core';
import { Movie } from './movieModel';
import { HttpClient } from '@angular/common/http';



// const privateMovies: Movie[] = [];

// let budget: number = 100;

@Injectable()
export class UserService {
    privateMovies: Movie[] = []; // = privateMovies;
    budgetState: string;
    pickedMovieInfo: Movie = new Movie();
    privateCount: number = 0;
    budget: number = 100;

    constructor() { }

    getPrivateMovies(): Movie[] {
        return this.privateMovies;
    }

    addMovieToPrivateMovies(movie: Movie) {
        if (this.budget >= movie.price && this.isMovieNewToArray(movie.title)) {
            this.addMovieToPrivateArray(movie);
            // this.reduceFromBudget(movie.price);
            this.budget -= movie.price;
            this.privateCount++;
            this.budgetState = ``;
        } else if (this.budget > 0 && this.budget < movie.price) {
            this.budgetState = `You don't have enough money, you only have $${this.budget} left`;
        } else if (this.budget >= movie.price && (!this.isMovieNewToArray(movie.title))) {
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
        this.budget += deleteMovie.price;
        this.privateCount--;
    }



    getBudget(): number {
        return this.budget;
    }

    getPrivateCount(): number {
        return this.privateCount;
    }

    getBudgetState(): string {
        return this.budgetState;
    }

    // reduceFromBudget(price: number) {
    //     budget -= price;
    // }


    passMovieToMovieInfo(movie: Movie) {
        this.pickedMovieInfo = movie;
    }
    getPickedMovieInfo(): Movie{
        return this.pickedMovieInfo;
    }
}

