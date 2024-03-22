import { Component } from '@angular/core';
import { news } from '../news';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsdataService } from '../newsdata.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-politics-detail',
  standalone: true,
  imports: [NgIf,FormsModule],
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
   save(): void {
    if (this.selectednews) {
      this.newsdataservice
        .updatenews(this.selectednews)
        .subscribe(() => this.goback());
    }
  }
}
