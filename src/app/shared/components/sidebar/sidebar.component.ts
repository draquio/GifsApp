import { Component  } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public isOpenMenu:boolean = false;
  constructor(private gifsService: GifsService) {}
  public get Tags(){
    return this.gifsService.tagsHistory;
  }

  OpenCloseMenu(open:boolean):void{
    this.isOpenMenu = open;
  }

  GetOldTag(tag:string):void{
    if(!this.isOpenMenu) return;
    this.gifsService.searchTag(tag);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.OpenCloseMenu(false);
  }
}
