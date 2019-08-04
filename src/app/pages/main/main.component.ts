import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/Album.class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  albumes: Album[] = [];

  constructor(private router: Router,
              private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbumes();
  }

  getAlbumes(): void {
    this.albumsService.getAlbumes()
      .subscribe(albumes => this.albumes = albumes);
  }

  logOut() {
    this.router.navigate(['/login']);
  }

}
