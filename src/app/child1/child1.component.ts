import { Component, OnInit, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"],
})
export class Child1Component implements OnInit, OnDestroy {
  @Input()
  user;

  constructor() {}

  ngOnInit() {
    console.log("I am created");
  }

  ngOnDestroy() {
    console.log("I am destroyed");
  }
}
