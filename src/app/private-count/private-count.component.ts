import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-private-count',
    templateUrl: './private-count.component.html',
    styleUrls: ['./private-count.component.css']
})
export class PrivateCountComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    get privateCount() {
        return this.userService.getPrivateCount();
    }

}
