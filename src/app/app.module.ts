import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContentManagerModule } from './content-manager/content-manager.module';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContentManagerModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
