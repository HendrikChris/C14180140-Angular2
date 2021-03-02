import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(public globalvar: GlobalvarService) { 
    this.list_note = this.globalvar.getNotes()
  }

  ngOnInit() {
    this.list_favorite_note = []
    var i: number = 0;
    for (i = 0; i < this.list_note.length; i++) {
      if (this.list_note[i]["favorite"]){
        this.list_favorite_note.push(this.list_note[i]);
      }
    }
  }

  list_note = []
  list_favorite_note = []
}