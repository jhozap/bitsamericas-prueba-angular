import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { MusicService } from 'src/app/services/music.service';
import { Songs } from 'src/app/models/Songs.class';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  songs: Songs[] = [];

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private musicService: MusicService) { }

  ngOnInit() {
    this.getParams();
    this.getAlbum();
  }

  getParams() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      });
  }

  getAlbum(): void {
    this.albumsService.getAlbum(this.id)
      .subscribe(
        albumes => this.getSongs(albumes.id)
      );
  }

  getSongs(id: number): void {
    this.musicService.searchSongs(id)
      .subscribe(
        songs => {
          this.songs = songs;
        }
      );
  }

}
