import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { ContentComponent } from './content/content.component';
import { AlcoholCategoryComponent } from './content/alcohol-category/alcohol-category.component';
import { AlcoholCategoryItemComponent } from './content/alcohol-category/alcohol-category-item/alcohol-category-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterItemComponent } from './filter-list/filter-item/filter-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterListComponent,
    ContentComponent,
    AlcoholCategoryComponent,
    AlcoholCategoryItemComponent,
    FilterItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
