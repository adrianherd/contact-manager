import { Component } from '@angular/core';
import {
  IconDefinition,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-manager';
  powerIcon: IconDefinition = faPowerOff;
}
