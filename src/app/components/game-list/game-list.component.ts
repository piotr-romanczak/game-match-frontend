import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/common/game/game';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Constants } from 'src/app/constants';

const gameUrl = '/game/';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  categoryAlias: String;
  games: Game[];
  componentType: string;

  constructor(private route: ActivatedRoute,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.keys.length != 0) {
        if (params.get('listParam') == 'coming-soon') {   
          this.componentType = Constants.COMING_SOON_DATA_VIEW_TYPE;       
          this.getNotYetReleasedGames();          
        } else if (params.get('listParam') == 'popular') {
          this.componentType = Constants.GENERIC_DATA_VIEW_TYPE;
          this.getPopularGames();

        } else if (params.get('listParam') == 'highest-rating') {
          this.componentType = Constants.GENERIC_DATA_VIEW_TYPE;
          this.getHighRatedGames();

        } else {
          this.componentType = Constants.GENERIC_DATA_VIEW_TYPE;
          this.categoryAlias = params.get('listParam')!;
          this.getGameListByCategories();
        }
      } else {
        this.getAllGames();
      }
    });
  }

  getGameListByCategories() {
    this.gameService.getGameListByCategory(this.categoryAlias).subscribe(
      data => {
        this.games = data;
      }
    )
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe(
      data => {
        this.games = data;
      }
    )
  }

  getPopularGames() {
    this.gameService.getPopularGames().subscribe(
      data => {
        this.games = data;
      }
    )
  }

  getHighRatedGames() {
    this.gameService.getHighRatedGames().subscribe(
      data => {
        this.games = data;
      }
    )
  }

  getNotYetReleasedGames() {
    this.gameService.getNotReleasedGames().subscribe(
      data => {
        this.games = data;
      }
    )
  }
}