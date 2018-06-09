import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Movie } from '../movieModel';

@Component({
    selector: 'app-movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

    movie: Movie = new Movie();

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.movie = this.userService.getPickedMovieInfo();
    }

}
