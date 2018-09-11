import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list/photo-list.resolve';
import { SignInComponent } from './home/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    }, {
        path: 'photos/user/:username',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolve
        }
    }, {
        path: 'photos/add',
        component: PhotoFormComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
