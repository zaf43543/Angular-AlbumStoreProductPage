import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()

class _albumUrl{
  static aUrl = "../assets/album.json";
} 

export class ProductService {

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(_albumUrl.aUrl).subscribe(
      Response.json()
    )
  }

}
