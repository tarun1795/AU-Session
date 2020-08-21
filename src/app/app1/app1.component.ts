import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-app1",
  templateUrl: "./app1.component.html",
  styleUrls: ["./app1.component.css"],
})
export class App1Component implements OnInit, OnDestroy {
  user = {
    age: 0,
  };

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    console.log('I am destroyed')
  }
}
