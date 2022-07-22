import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { SearchResult } from '../shared/objects/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  url: string = 'https://api.quotable.io/search/quotes?query='

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param searchString search input string
   * @returns search result
   */
  public getQuotesByQuery(searchString: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(this.url + searchString).pipe(
      map((data: SearchResult) => data)
    );
  }

}