import { Component, OnInit } from '@angular/core';
import { HttpCocktailsService } from '../shared/http-cocktails.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(private httpCocktailsService: HttpCocktailsService) {}
  // drinks = [];
  assortment = [];
  filtersList = [];
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.httpCocktailsService.getAlcoholicCategories().subscribe((response) => {
      this.filtersList = response.drinks;
      // console.log(this.filtersList);
      this.filtersList.forEach((category) => {
        this.httpCocktailsService
          .getSomeAlcoholOfCertainCategory(category.strCategory)
          .subscribe((response) => {
            const alcoholCategory = {
              alcoholCategoryTitle: category.strCategory,
              drinks: response.drinks,
            };
            this.assortment.push(alcoholCategory);
            // console.log(this.assortment);
          });
      });
      this.loading = false;
    });

    // this.httpCocktailsService
    //   .getSomeAlcoholOfCertainCategory('Ordinary Drink')
    //   .subscribe((response) => {
    //     this.drinks = response.drinks.map((drink) => {
    //       return {
    //         title: drink.strDrink,
    //         srcLink: drink.strDrinkThumb,
    //       };
    //     });
    //     console.log(this.drinks);
    //     this.loading = false;
    //   });
  }
}
