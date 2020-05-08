import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderBoard;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLeaderBoard().subscribe((data) =>{
      this.leaderBoard = data['leader_board'];
      console.log(this.leaderBoard);
    })
  }

}
