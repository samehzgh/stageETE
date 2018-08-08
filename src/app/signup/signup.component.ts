import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AlertService, UserService } from '../_services/index';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';


@Component({
    moduleId: module.id.toString(),
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {}

    register() {
        this.loading = true;
        this.userService.create(this.model);
    }
   
}
