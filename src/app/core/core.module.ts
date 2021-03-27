import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    NavBarComponent
  ],
  imports:[
    RouterModule
  ],
  exports:[
    NavBarComponent
  ]
})

export class CoreModule {
  constructor() {

  }
}
