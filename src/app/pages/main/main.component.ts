import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/Album.class';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('child', { static: true }) child: AlbumComponent;
  albumes: Album[];
  term: '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbumes();
  }

  getAlbumes(): void {
    this.albumsService.getAlbumes()
      .subscribe(albumes => this.albumes = albumes);
  }

  Search() {
    console.log(this.term);
    if (this.term === '') {
      this.getAlbumes();
    } else {
      this.albumsService.searchAlbumes(this.term)
      .subscribe(albumes => this.albumes = albumes);
    }
  }

}
