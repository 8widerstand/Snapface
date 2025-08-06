import {Component, OnInit, signal} from '@angular/core';
import {HeaderComponent} from './header/header.component'
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  protected readonly title = signal('snapface');
}
