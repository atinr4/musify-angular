import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
    declarations: [LoginComponent, MenuComponent, DashboardComponent, CategoryComponent]
})
export class HomeModule { }