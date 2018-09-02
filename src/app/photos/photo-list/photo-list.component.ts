import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: [ './photo-list.component.css' ]
})
export class PhotoListComponent implements OnInit {

    public photos: Photo[] = [];

    public constructor(private photoService: PhotoService,
                       private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        const username = this.activatedRoute.snapshot.params.username;
        this.listPhotosFromUser(username);
    }

    private listPhotosFromUser(username: string) {
        this
            .photoService
            .listFromUser(username)
            .subscribe(response => this.photos = response);
    }
}
