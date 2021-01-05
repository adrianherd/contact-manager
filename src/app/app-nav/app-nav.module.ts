import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../shared/directives/directives.module';
import { AppNavComponent } from './app-nav.component';

@NgModule({
  declarations: [
    AppNavComponent,
  ],
  exports: [
    AppNavComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class AppNavModule { }
