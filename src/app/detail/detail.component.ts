import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public globalvar: GlobalvarService) {
    this.list_note = this.globalvar.getNotes();
  }
  
  paramIndex: number;
  list_note = [];
  judul = "";
  isi = "";
  tanggal = "";
  favorite = true;
  button_text = "Liked"

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.paramIndex = Number(index);
    this.judul = this.list_note[this.paramIndex]["judul"];
    this.isi = this.list_note[this.paramIndex]["isi"];
    this.tanggal = this.list_note[this.paramIndex]["tanggal"];
    this.favorite = this.list_note[this.paramIndex]["favorite"];
    if (this.favorite == false){
      this.button_text = "Disliked";
    }
  }

  liked(){
    if (this.favorite == false){
      this.list_note[this.paramIndex]["favorite"] = true;
      this.favorite = true;
    }
    else{
      this.list_note[this.paramIndex]["favorite"] = false;
      this.favorite = false;
    }
    if (this.favorite == false){
      this.button_text = "Disliked";
    }
    else{
      this.button_text = "Liked";
    }
  }

}