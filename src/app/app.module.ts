import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavHeaderComponent } from './header/nav-header/nav-header.component';
import { ItemComponent } from './items/item/item.component';
import { ItemsService } from './service/items.service';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { UnitHierarchyComponent } from './items/unit-hierarchy/unit-hierarchy.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavHeaderComponent,
    ItemComponent,
    SignUpComponent,
    UnitHierarchyComponent,
    
  ],
  imports: [
    BrowserModule,
    
    
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
