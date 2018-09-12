import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public authenticate(username: string, password: string): Observable<any> {
        const data = {
            userName: username,
            password: password
        };

        return this.http.post(API_URL + 'user/login', data);
    }
}
