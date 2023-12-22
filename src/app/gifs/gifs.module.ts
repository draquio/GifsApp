import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomepageComponent, SearchBoxComponent, CardListComponent, CardItemComponent],
  imports: [CommonModule, SharedModule],
  exports:[HomepageComponent]
})
export class GifsModule {}
