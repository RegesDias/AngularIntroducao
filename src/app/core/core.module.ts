import { NgModule } from "@angular/core";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/erro404/error-404.component";
@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ],
    imports:[
    RouterModule.forChild([ 
        {
            path:'**', component: Error404Component
        }
        ])
    ],
    exports:[
        NavBarComponent,
        Error404Component
    ]    
})
export class CoreModule{}