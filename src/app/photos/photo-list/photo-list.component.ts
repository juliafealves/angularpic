import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: [ './photo-list.component.css' ]
})
export class PhotoListComponent implements OnInit {


    public filter = '';
    public hasMore = true;
    public currentPage = 1;
    public username = '';
    public photos: Photo[] = [];

    public constructor(private activatedRoute: ActivatedRoute,
                       private photoService: PhotoService) {
    }

    public ngOnInit(): void {
        this.username = this.activatedRoute.snapshot.params.username;
        this.photos = this.activatedRoute.snapshot.data.photos;

    }


    /**
     * Load more photos with pagination.
     */
    public loadPhotos(): void {
        this.photoService
            .listFromUserPaginated(this.username, ++this.currentPage)
            .subscribe(photos => {
                this.filter = '';
                this.photos = this.photos.concat(photos);

                if (!photos.length) {
                    this.hasMore = false;
                }
            });
    }
}
