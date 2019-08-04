import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemoryDataAlbumService implements InMemoryDbService {
  createDb() {
    const Albumes = [
      {
        id: 1,
        album: 'This is Mozart',
        artista: 'Mozart',
        portada: 'assets/img/Mozart.jpg',
        principalSong: 'assets/audio/MozartSymphony40.mp3'
      },
      {
        id: 2,
        album: 'Beethoven',
        artista: 'Ludwig van Beethoven',
        portada: 'assets/img/Beethoven.jpg',
        principalSong: 'assets/audio/ParaElisa.mp3'
      },
      {
        id: 3,
        album: 'True',
        artista: 'Avicii',
        portada: 'assets/img/Avicii.jpg',
        principalSong: 'assets/audio/WakeMeUp.mp3'
      },
      {
        id: 4,
        album: 'Death Magnetic',
        artista: 'Metallica',
        portada: 'assets/img/Metallica.jpg',
        principalSong: 'assets/audio/One.mp3'
      },
      {
        id: 5,
        album: 'Energia',
        artista: 'J Balvin',
        portada: 'assets/img/JBalvin.jpg',
        principalSong: 'assets/audio/SigoExtranandote.mp3'
      }
    ];
    const songs = [
      {
        id: 1,
        idAlbum: 1,
        song: 'Symphony No. 40',
        date: '1788',
        resource: 'assets/audio/MozartSymphony40.mp3'
      },
      {
        id: 2,
        idAlbum: 1,
        song: 'Le nozze di Figaro',
        date: '1786',
        resource: 'assets/audio/MozartLenozzediFigaro.mp3'
      },
      {
        id: 3,
        idAlbum: 2,
        song: 'Para Elisa',
        date: '1810',
        resource: 'assets/audio/ParaElisa.mp3'
      },
      {
        id: 4,
        idAlbum: 2,
        song: 'Symphony No. 8',
        date: '1812',
        resource: 'assets/audio/BeethovenSymphony8.mp3'
      },
      {
        id: 5,
        idAlbum: 3,
        song: 'Wake Me Up',
        date: '2014',
        resource: 'assets/audio/WakeMeUp.mp3'
      },
      {
        id: 6,
        idAlbum: 3,
        song: 'You Make Me',
        date: '2014',
        resource: 'assets/audio/YouMakeMe.mp3'
      },
      {
        id: 7,
        idAlbum: 4,
        song: 'Nothing Else Matters',
        date: '1991',
        resource: 'assets/audio/NothingElseMatters.mp3'
      },
      {
        id: 8,
        idAlbum: 4,
        song: 'One',
        date: '1988',
        resource: 'assets/audio/One.mp3'
      },
      {
        id: 9,
        idAlbum: 5,
        song: 'Bobo',
        date: '2016',
        resource: 'assets/audio/Bobo.mp3'
      },
      {
        id: 10,
        idAlbum: 5,
        song: 'Sigo Extrañandote',
        date: '2016',
        resource: 'assets/audio/SigoExtranandote.mp3'
      }
    ];
    return { Albumes, songs };
  }

  constructor() { }
}
