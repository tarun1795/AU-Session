import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyFirstComponent } from "./components/my-first/my-first.component";
import { MyDetailsComponent } from "./components/my-details/my-details.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { App1Component } from "./app1/app1.component";
import { Child1Component } from "./child1/child1.component";
import { MulitplyPipe } from "./pipes/mulitply.pipe";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
// Annotation .. Decorator
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyDetailsComponent,
    App1Component,
    Child1Component,
    MulitplyPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
