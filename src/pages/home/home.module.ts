import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

//irá chamar esssa pagina assim que abrir

@NgModule({
    declarations: [HomePage],
    //acrescentar o homepage como sub-classe 
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomePageModule{}