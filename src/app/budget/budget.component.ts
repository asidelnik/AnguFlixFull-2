import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {

    }

    get budget() {
        return this.userService.getBudget();
    }

}
