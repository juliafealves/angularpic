import { Injectable } from '@angular/core';

import * as jwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    public setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    private decodeAndNotify(): void {
        const token = this.tokenService.getToken();
        const user = jwtDecode(token) as User;
        this.userSubject.next(user);
    }
}
