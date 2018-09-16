import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
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
