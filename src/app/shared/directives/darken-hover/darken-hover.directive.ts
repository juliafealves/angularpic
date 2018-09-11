import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenHover]'
})
export class DarkenHoverDirective {

    @Input()
    private brightness = '70%';

    constructor(private  element: ElementRef,
                private render: Renderer2) {
    }

    @HostListener('mouseover')
    public darkenOn() {
        this.render.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    public darkenOff() {
        this.render.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
    }

}
