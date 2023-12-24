import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ImgIconComponent } from './icons/IMGIcon.component';
import { MenuIconComponent } from './icons/menuicon.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchIconComponent } from './icons/searchicon.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent, LoaderComponent, ImgIconComponent, MenuIconComponent, SearchBoxComponent, SearchIconComponent, LogoComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyImageComponent, LoaderComponent, LogoComponent],
})
export class SharedModule {}
