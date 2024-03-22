import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { news } from './news';
import { Subject, Observable, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NewsdataService } from './newsdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgFor,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private newsdataservice:NewsdataService){}
  title = 'News_Hub';
  private searchTerms=new Subject<string>();
  news$!:Observable<news[]>;
  search(term:string){
    this.searchTerms.next(term);
  }
  ngOnInit(){
    this.news$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.newsdataservice.searchnews(term))
    )
    console.log(this.news$);
  }
}
