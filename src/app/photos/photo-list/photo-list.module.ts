import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenHoverModule } from '../../shared/directives/darken-hover/darken-hover.module';

@NgModule({
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenHoverModule
    ],
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        FilterByDescriptionPipe,
        LoadButtonComponent,
        SearchComponent
    ]
})
export class PhotoListModule {
}
