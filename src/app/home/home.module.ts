import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { InputMessageModule } from '../shared/components/input-message/input-message.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputMessageModule
    ],
    declarations: [ SignInComponent ]
})
export class HomeModule {
}
