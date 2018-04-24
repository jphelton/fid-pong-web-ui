import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TwoPlayerGame} from "../model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TwoPlayerGameService {

  twoPlayerGamesUrl = '/api/games/twoPlayer/'

  constructor() { }

  getTwoPlayerGames(): Observable<TwoPlayerGame> {
    //return this.http.get<TwoPlayerGame>(this.twoPlayerGamesUrl)
      return null
  }

}
