import { NgModule } from "@angular/core";
import { replacePipe } from "src/app/pipe/replace.pipe";

@NgModule({
  declarations:[
    replacePipe
  ],
  exports:[
    replacePipe
  ]
})
export class AppPipeModule{

}
