import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photos/photo/photo.service';
import {Photo} from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'AngularPic';
    public photos: Photo[] = [];

    public constructor(private photoService: PhotoService) {}

    ngOnInit(): void {
      this.listPhotosFromUser('flavio');
    }

    private listPhotosFromUser(username: string) {
        this
            .photoService
            .listFromUser(username)
            .subscribe(response => this.photos = response);
    }
}
