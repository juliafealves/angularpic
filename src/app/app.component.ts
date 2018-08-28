import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPic';
  photos = [{
      url: 'https://i.pinimg.com/originals/93/74/b0/9374b044c9b627c427f3f6ce2f139e96.jpg',
      description: 'Lion'
    }, {
      url: 'http://www.portaldosanimais.com.br/blog/wp-content/gallery/fotos-de-girafa/Fotos-de-Girafa-4.jpg',
      description: 'Giraffe'
    }];
}
