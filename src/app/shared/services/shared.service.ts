import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<string>()

  constructor() { }

  searchFilter(text){
    this.subject.next(text);
  }

  getSearchText(): Observable<string>{
    return this.subject.asObservable()
  }
}
