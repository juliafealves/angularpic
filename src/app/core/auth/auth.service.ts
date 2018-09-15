import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,
                private tokenService: TokenService) {
    }

    public authenticate(username: string, password: string): Observable<any> {
        const data = {
            userName: username,
            password: password
        };

        return this
            .http
            .post(API_URL + 'user/login', data, {observe: 'response'})
            .pipe(tap(response => {
                const authToken = response.headers.get('x-access-token');
                this.tokenService.setToken(authToken);
            }));
    }
}
