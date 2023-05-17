import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { UserService } from "./core";
import {isPlatformBrowser} from '@angular/common'


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService,
    @Inject(PLATFORM_ID) private platformId) {}

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      this.userService.populate();
    }else {
    this.userService.purgeAuthSsr();
    }
  }
}
