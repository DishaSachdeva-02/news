import { Component } from '@angular/core';
import { news } from '../news';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsdataService } from '../newsdata.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sports-detail',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './sports-detail.component.html',
  styleUrl: './sports-detail.component.css'
})
export class SportsDetailComponent {
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
