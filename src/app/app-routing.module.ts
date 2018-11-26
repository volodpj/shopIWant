import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { MainSecondComponent } from './main/main-second/main-second.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const ROUTES: Routes = [
  { path: "*", component: MainSecondComponent },
]
