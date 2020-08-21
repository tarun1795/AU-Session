import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { App1Component } from "./app1/app1.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "app1",
    component: App1Component,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "home",
    component: App1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
