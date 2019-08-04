import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Songs } from '../models/Songs.class';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private heroesUrl = 'api/songs';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getSongs(): Observable<Songs[]> {
    return this.http.get<Songs[]>(this.heroesUrl)
      .pipe(
        tap(_ => ''),
        catchError(this.handleError<Songs[]>('getSongs', []))
      );
  }

  getSongById(id: number): Observable<Songs> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Songs>(url).pipe(
      tap(_ => ''),
      catchError(this.handleError<Songs>(`getSongById idAlbum=${id}`))
    );
  }

  searchSongs(id: number): Observable<Songs[]> {
    return this.http.get<Songs[]>(`${this.heroesUrl}/?idAlbum=${id}`).pipe(
      tap(_ => ''),
      catchError(this.handleError<Songs[]>('searchSongs', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
