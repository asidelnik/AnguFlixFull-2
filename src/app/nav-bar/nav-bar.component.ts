import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Movie } from '../movieModel';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {
    }
}
