import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalvarService } from './globalvar.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { DetailComponent } from './detail/detail.component';

const ROUTES: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'detail/:index', component: DetailComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputComponent, FavoriteComponent, DetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
