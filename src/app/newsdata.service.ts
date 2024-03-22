import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { news } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsdataService {

  constructor(private http:HttpClient) { }
  private url='api/mynews';
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  getNews():Observable<news[]>{
    return this.http.get<news[]>(this.url);
  }
  getdetail(id:number):Observable<news>{
    const url1=`${this.url}/${id}`
    return this.http.get<news>(url1);
  }
  addnews(news:news):Observable<news[]>{
    return this.http.post<news[]>(this.url,news,this.httpOptions);
  }
  deletenews(id:number):Observable<news>{
    const url1=`${this.url}/${id}`;
    return this.http.delete<news>(url1,this.httpOptions);
  }
  searchnews(term:string):Observable<news[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<news[]>(`${this.url}/?titles=${term}`);
  }
}

