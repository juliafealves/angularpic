import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './input-message.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InputMessageComponent
    ],
    exports: [
        InputMessageComponent
    ]
})
export class InputMessageModule {
}
