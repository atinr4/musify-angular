import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgCircleProgressModule
    ],
    declarations: [LoginComponent, MenuComponent, DashboardComponent, CategoryComponent, LeaderboardComponent]
})
export class HomeModule { }