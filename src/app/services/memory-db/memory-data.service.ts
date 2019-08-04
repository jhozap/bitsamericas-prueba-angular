import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemoryDataAlbumService implements InMemoryDbService {
  createDb() {
    const Albumes = [
      { id: 1, album: 'This is Mozart', artista: 'Mozart', portada: '/src/assets/img/Mozart.jpg', principalSong: '' },
      { id: 2, album: 'Beethoven', artista: 'Ludwig van Beethoven', portada: '/src/assets/img/Beethoven.jpg', principalSong: ''},
      { id: 3, album: 'True', artista: 'Avicii', portada: '/src/assets/img/Avicii.jpg', principalSong: '' },
      { id: 4, album: 'Death Magnetic', artista: 'Metallica', portada: '/src/assets/img/Avicii.jpg', principalSong: '' },
      { id: 5, album: 'Energia', artista: 'J Balvin', portada: '/src/assets/img/JBalvin.jpg', principalSong: '' }
    ];
    return {Albumes};
  }

  constructor() { }
}
