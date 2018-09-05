import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html',
    styleUrls: [ './photos.component.css' ]
})
export class PhotosComponent implements OnChanges {

    @Input()
    public photos: Photo[];

    public rows: Photo[][];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.photos) {
            this.rows = this.getGroupColumns(this.photos);
        }
    }

    private getGroupColumns(photos: Photo[]): Photo[][] {
        const rows = [];

        for (let index = 0; index < photos.length; index += 3) {
            rows.push(photos.slice(index, index + 3));
        }

        return rows;
    }
}
