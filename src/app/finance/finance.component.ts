import { Component } from '@angular/core';
import { news } from '../news';
import { NewsdataService } from '../newsdata.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  constructor(private newsdataservice:NewsdataService){}
   newsdisplay?:news[]=[];
   ngOnInit(){
    this.getnews();
    console.log(this.newsdisplay);
   }
   getnews(){
     this.newsdataservice.getNews().subscribe(curr=>{
      curr.forEach(val=>{
        if(val.cateogry=="finance"){
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
