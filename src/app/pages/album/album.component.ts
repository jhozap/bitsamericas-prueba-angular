import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/models/Album.class';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;

  visible = true;
  favorite = false;
  constructor() { }

  ngOnInit() {
  }

  setFavorite() {
    this.favorite = !this.favorite;
  }

  hideItem() {
    this.visible = false;
  }

}
