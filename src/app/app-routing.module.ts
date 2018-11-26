import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { MainSecondComponent } from './main/main-second/main-second.component';
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const ROUTES: Routes = [
  { path: "baseMain", component: MainComponent },
  { path: "secondMain", component: MainSecondComponent },
  { path: "", redirectTo: "/baseMain", pathMatch: "full"},
]
