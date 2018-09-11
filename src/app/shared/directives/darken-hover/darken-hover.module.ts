import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenHoverDirective } from './darken-hover.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DarkenHoverDirective
    ],
    exports: [
        DarkenHoverDirective
    ]
})
export class DarkenHoverModule {
}
