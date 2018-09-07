import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: [ './photo-list.component.css' ]
})
export class PhotoListComponent implements OnInit, OnDestroy {

    public debounce: Subject<string> = new Subject<string>();
    public filter = '';
    public photos: Photo[] = [];

    public constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.photos = this.activatedRoute.snapshot.data.photos;
        this
            .debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}
