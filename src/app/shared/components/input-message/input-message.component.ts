import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ap-input-message',
    templateUrl: './input-message.component.html',
    styleUrls: [ './input-message.component.css' ]
})
export class InputMessageComponent implements OnInit {

    @Input()
    public message = '';

    constructor() {
    }

    ngOnInit() {
    }

}
