import { Component, OnInit } from '@angular/core';
import { HttpCocktailsService } from '../shared/http-cocktails.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  constructor(private httpCocktailsService: HttpCocktailsService) {}
  filtersList = [];
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.httpCocktailsService.getAlcoholicCategories().subscribe((response) => {
      this.filtersList = response.drinks.map((drinkCategory) => {
        return {
          ...drinkCategory,
          checked: true,
        };
      });
      this.loading = false;
      // this.filtersList = response.drinks;
      console.log(this.filtersList);
    });
  }

  filterApply() {
    console.log('filterApply');
  }
}
