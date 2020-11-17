import { Injectable } from '@angular/core';
import { iBook } from '../models/book'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient)
    { }

    books: iBook[] = [{title: 'goodbye'},
    {title: 'again'},
    {title: 'tomorrow'},
    {title: 'yesterday'}];

    getBooks() : Observable <iBook[]> {

      console.log("get books called");
    

    
    
      return of(this.books);


      
      }
}

