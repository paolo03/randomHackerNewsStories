import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  // get all news ids
  getTopStoriesIds(): Observable<number[]>{
    return this.http.get<number[]>(Constants.topStoriesUrl)
    .pipe(
      catchError(error => {
        // catch request error
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
          } else {
              errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(errorMsg);
      })
    );
  }

  // getStoryItemById
  async getStoryItemById(id: number): Promise<any>{
    return await this.http.get(Constants.storeItemUrl(id)).toPromise()
  }

  // getStoryItemById
  async getStoryAuthor(id: string): Promise<any>{
    return await this.http.get(Constants.authorDataUrl(id)).toPromise()
  }


  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
}
