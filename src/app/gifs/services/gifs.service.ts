import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from 'src/app/api.constants';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];
  private ApiKey: string = 'syzmqA7n1kv5MBQPE7OGVohPaYoLDcY8';
  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string): void {
    tag = tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', ENV.API_key)
      .set('limit', 10)
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${ENV.API_Url}/gifs/${ENV.API_Routes.search}`, {
        params,
      })
      .subscribe((resp) => {
        this.gifList = resp.data
        console.log(this.gifList);
        
      });
  }
}