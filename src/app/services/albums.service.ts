import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Album } from '../models/Album.class';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private heroesUrl = 'api/Albumes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getAlbumes(): Observable<Album[]> {
    return this.http.get<Album[]>(this.heroesUrl)
      .pipe(
        tap(_ => ''),
        catchError(this.handleError<Album[]>('getAlbumes', []))
      );
  }

  getAlbum(id: number): Observable<Album> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Album>(url).pipe(
      tap(_ => ''),
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
  }

  searchAlbumes(term: string): Observable<Album[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Album[]>(`${this.heroesUrl}/?album=${term}`).pipe(
      tap(_ => ''),
      catchError(this.handleError<Album[]>('searchAlbumes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
