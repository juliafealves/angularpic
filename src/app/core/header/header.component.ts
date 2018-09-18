import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

    public user: User;
    private user$: Observable<User>;

    constructor(private userService: UserService) {
        this.user$ = this.userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

    ngOnInit() {
    }

}
