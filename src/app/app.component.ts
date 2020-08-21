import { Component, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "./services/user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy {
  myName = "SACHIN";

  today = new Date();

  userFormGroup = new FormGroup({
    userName: new FormControl("Tarun"),
    userPhone: new FormControl(""),
    userAge: new FormControl(""),
    userGener: new FormControl(""),
  });

  data$ = this.httpClient.get<any>("http://demo5214125.mockable.io/get");

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  updateName(name) {
    console.log(name);
    this.myName = name;
  }

  submitData() {
    alert("Form Submitted");
    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
    }
  }

  ngOnDestroy() {}
}
