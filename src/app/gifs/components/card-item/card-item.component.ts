import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input()
  public gif!: Gif;
  public imageHeight: string = '';
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gifs property is required');
    this.imageHeight = this.gif.images.downsized_medium.height + 'px';
  }
}
