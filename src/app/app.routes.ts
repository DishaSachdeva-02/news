import { Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticsComponent } from './politics/politics.component';
import { FinanceDetailComponent } from './finance-detail/finance-detail.component';
import { SportsDetailComponent } from './sports-detail/sports-detail.component';
import { PoliticsDetailComponent } from './politics-detail/politics-detail.component';
import { AddnewsComponent } from './addnews/addnews.component';

export const routes: Routes = [
    {path:"finance" , component:FinanceComponent},
    {path:"sports" , component:SportsComponent},
    {path:"politics" , component:PoliticsComponent},
    {path:"addnews",component:AddnewsComponent},
    {path:"finance/:id" , component:FinanceDetailComponent},
    {path:"sports/:id" , component:SportsDetailComponent},
    {path:"politics/:id" , component:PoliticsDetailComponent }
];
