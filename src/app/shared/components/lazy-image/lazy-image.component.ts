import { Component, Input, OnInit } from '@angular/core';
import { The480_WStill as ImageGif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public image!: ImageGif;
  @Input()
  public alt!:string;
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.image) throw new Error('URL propery is requiered');
  }

  onLoad():void{
    this.hasLoaded = true;
    
  }
}
