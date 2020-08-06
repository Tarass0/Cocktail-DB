import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { FbCreateResponse, Post } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, scan } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpCocktailsService {
  constructor(private http: HttpClient) {}
  getSomeAlcoholOfCertainCategory(param): Observable<any> {
    return this.http.get(`${environment.cocktailsListUrl}?c=${param}`);
    // return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php`, {
    //   params: new HttpParams().set('c', 'Ordinary Drink'),
    // });
  }

  getAlcoholicCategories(): Observable<any> {
    return this.http.get(`${environment.filtersListUrl}?c=list`);
    // return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php`, {
    //   params: new HttpParams().set('c', 'Ordinary Drink'),
    // });
  }

  // getById(id: string): Observable<Post> {
  //   return this.http
  //     .get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
  //     .pipe(
  //       map((post: Post) => {
  //         return {
  //           ...post,
  //           id,
  //           date: new Date(post.date),
  //         };
  //       }),
  //     );
  // }
}
