import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
        private router: Router) { }

    getAll() {
        return JSON.parse(localStorage.getItem("users"));
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        let users: any[] = JSON.parse(localStorage.getItem("users"));
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        this.router.navigate(['/login']);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}