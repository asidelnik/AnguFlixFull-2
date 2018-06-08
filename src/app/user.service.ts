import { Injectable } from '@angular/core';
import { Movie } from './movieModel';
import { HttpClient } from '@angular/common/http';


const privateMovies: Movie[] = [];

let budget: number = 100;

@Injectable()
export class UserService {
    privateMovies: Movie[] = privateMovies;
    budgetState: string;

    constructor() { }

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
        budget += movieToDelete.price;
        // this.privateMovies = this.privateMovies.filter((movie) => {
        //   return movie.id !== movieToDelete.id;
        // });
        // return this.privateMovies;
    }

}
