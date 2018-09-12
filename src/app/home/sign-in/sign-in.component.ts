import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit {

    @ViewChild('usernameInput')
    public usernameInput: ElementRef<HTMLInputElement>;

    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private platformDetectorService: PlatformDetectorService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: [ '', Validators.required ],
            password: [ '', Validators.required ]
        });
    }

    public login(): void {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this
            .authService
            .authenticate(username, password)
            .subscribe(() => this.router.navigate([ 'photos', 'user', username ]), () => {
                alert('Invalid user name or password.');
                this.platformDetectorService.isPlatformBrowser() && this.usernameInput.nativeElement.focus();
                this.loginForm.reset();
            });
    }
}
