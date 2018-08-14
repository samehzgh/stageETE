import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
    if( username == 'admin' && password == 'admin')
    {localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);}

  /*let users: any[] = JSON.parse(localStorage.getItem("users"));
        let foundUser = users.find(function (element) {
            return element.username === username && element.password === password;
        });
        if (foundUser) {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            this.router.navigate(['/dashboard']);
            }
            else
            { 
                  alert("User Not Found");
            }
*/

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
