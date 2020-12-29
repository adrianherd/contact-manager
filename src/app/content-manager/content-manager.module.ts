import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagerComponent } from './content-manager.component';

@NgModule({
  declarations: [
    ContentManagerComponent,
  ],
  exports: [
    ContentManagerComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ContentManagerModule {
}
