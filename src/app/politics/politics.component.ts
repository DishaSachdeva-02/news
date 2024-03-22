import { Component } from '@angular/core';
import { news } from '../news';
import { NewsdataService } from '../newsdata.service';
import { NgFor , NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-politics',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './politics.component.html',
  styleUrl: './politics.component.css'
})
export class PoliticsComponent {
  constructor(private newsdataservice:NewsdataService){}
  newsdisplay?:news[]=[];
  ngOnInit(){
   this.getnews();
   console.log(this.newsdisplay);
  }
  getnews(){
    this.newsdataservice.getNews().subscribe(curr=>{
     curr.forEach(val=>{
       if(val.cateogry=="politics"){
         this.newsdisplay?.push(val);
       }
     })
   })
  }
  delete(news: news): void{
    this.newsdisplay = this.newsdisplay?.filter(n => n!= news);
    this.newsdataservice.deletenews(news.id).subscribe();
  }
}
