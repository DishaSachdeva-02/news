import { Component } from '@angular/core';
import { news } from '../news';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsdataService } from '../newsdata.service';

@Component({
  selector: 'app-politics-detail',
  standalone: true,
  imports: [],
  templateUrl: './politics-detail.component.html',
  styleUrl: './politics-detail.component.css'
})
export class PoliticsDetailComponent {
  selectednews?:news;
  constructor(private activatedroute:ActivatedRoute, private location:Location,private newsdataservice:NewsdataService){}
  ngOnInit(){
    this.getnewsdetail()
   }
   getnewsdetail(){
    const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.newsdataservice.getdetail(id).subscribe(news=>this.selectednews=news);
   }
   goback(){
    this.location.back();
   }
}
