import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Players} from '../model/players';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Players[]> {
    return this.http.get<Players[]>(API_URL + '/plays');
  }

  saveBook(play): Observable<Players> {
    return this.http.post<Players>(API_URL + '/plays', play);
  }

  findById(id: number): Observable<Players> {
    return this.http.get<Players>(`${API_URL}/plays/${id}`);
  }

  updatePlay(id: number, book: Players): Observable<Players> {
    return this.http.put<Players>(`${API_URL}/plays/${id}`, book);
  }

  deletePlay(id: number): Observable<Players> {
    return this.http.delete<Players>(`${API_URL}/plays/${id}`);
  }

}
