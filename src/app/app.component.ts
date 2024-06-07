import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputUrlComponent } from './input-url/input-url.component';
import { TitleComponent } from './share/content/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, TitleComponent, InputUrlComponent],
})
export class AppComponent {}
