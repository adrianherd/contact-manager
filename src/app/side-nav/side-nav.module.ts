import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../shared/directives/directives.module';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class SideNavModule { }
