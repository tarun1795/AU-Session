import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-my-details",
  templateUrl: "./my-details.component.html",
  styleUrls: ["./my-details.component.css"],
})
export class MyDetailsComponent implements OnInit {
  @Input()
  name;

  @Output()
  nameChanged = new EventEmitter<string>();

  numbers = [1, 2, 3, 5, 6];
  constructor() {}

  ngOnInit() {}

  changeName() {
    this.nameChanged.emit(this.name);
  }
}
