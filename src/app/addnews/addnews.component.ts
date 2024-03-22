import { Component } from '@angular/core';
import { NewsdataService } from '../newsdata.service';
import { news } from '../news';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addnews',
  standalone: true,
  imports: [],
  templateUrl: './addnews.component.html',
  styleUrl: './addnews.component.css'
})
export class AddnewsComponent {
  constructor(private newsdataservice:NewsdataService , private location:Location){}
  add(titles:string,cateogry:string,author:string,description:string,publictiondate:string){
    titles=titles.trim();
    cateogry=cateogry.trim();
   description=description.trim();
    author=author.trim();
    
    if(!titles||!author||!description||!cateogry||!publictiondate){
      return;
    }
    this.newsdataservice.addnews({titles,cateogry,author,description,publictiondate} as news,).subscribe(()=>this.goback());
  }
  goback(){
    this.location.back();
  }
}
