import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';

// Components
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ErrorsModule,
        PhotosModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
