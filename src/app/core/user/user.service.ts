import { Injectable } from '@angular/core';

import * as jwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    public setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    public getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(): void {
        const token = this.tokenService.getToken();
        const user = jwtDecode(token) as User;
        this.userSubject.next(user);
    }
}
