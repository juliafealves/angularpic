import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    imports: [
        CommonModule,
        PhotoModule
    ],
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        FilterByDescriptionPipe,
        LoadButtonComponent
    ]
})
export class PhotoListModule {
}
