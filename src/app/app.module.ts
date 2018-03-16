import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TinymceModule } from 'angular2-tinymce';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { CategoryConfig,CategoryRoute } from './category/config';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryPipe } from './category/category.pipe';

const appRoutes: Routes = [

  ...CategoryRoute
 
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryConfig,
    CategoryPipe
  ],
  imports: [
    BrowserModule , 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     HttpClientModule,
      NgbModule.forRoot(),
     TinymceModule.withConfig({}),
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);