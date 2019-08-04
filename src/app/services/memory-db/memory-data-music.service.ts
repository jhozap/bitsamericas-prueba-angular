import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataMusicService implements InMemoryDbService {
  createDb() {
    const songs = [
      { id: 1, idAlbum: 1, song: 'Symphony No. 40', date: '1788' },
      { id: 2, idAlbum: 1, song: 'Le nozze di Figaro', date: '1786' },
      { id: 3, idAlbum: 2, song: 'Para Elisa', date: '1810' },
      { id: 4, idAlbum: 2, song: 'Symphony No. 8', date: '1812' },
      { id: 5, idAlbum: 3, song: 'Wake Me Up', date: '2014' },
      { id: 6, idAlbum: 3, song: 'You Make Me', date: '2014' },
      { id: 7, idAlbum: 4, song: 'Nothing Else Matters', date: '1991' },
      { id: 8, idAlbum: 4, song: 'One', date: '1988' },
      { id: 9, idAlbum: 5, song: 'Bobo', date: '2016' },
      { id: 10, idAlbum: 5, song: 'Sigo Extrañandote', date: '2016' }
    ];
    return {songs};
  }

  constructor() { }
}
