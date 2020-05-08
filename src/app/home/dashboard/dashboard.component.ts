import { Component, OnInit } from '@angular/core';
import { hash } from '../../hash/hash';
import { ApiService } from '../../api.service';
import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CircleProgressComponent, CircleProgressOptions]
})

export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  user_data;
  progress: number;
  progressStyle;
  categories;

  Arr = Array;

  ngOnInit(): void {
    //Remove hash
    window.location.hash = "";

    let _token = hash.access_token;

    if (_token != undefined)
      localStorage.setItem('_token', _token);


    this.apiService.getCurrentUser(localStorage.getItem('_token')).subscribe((data) => {
      if (data) {
        this.user_data = data;

        this.progress = ((data['total_xp'] - ((data['level'] * 1000) - 1000)) * 100) / ((data['level'] * 1000) - data['total_xp']);
        this.progressStyle = {
          'width': this.progress + '%'
        };
      }
    });

    this.apiService.getCategories(localStorage.getItem('_token')).subscribe((data) => {
      this.categories = data;
    })

  }

  formatSubtitle = (percent: number) => {
    if (percent >= 100) {
      return "Congratulations!"
    } else if (percent >= 50) {
      return "Half"
    } else if (percent > 0) {
      return "Just began"
    } else {
      return "Not started"
    }
  }

}

