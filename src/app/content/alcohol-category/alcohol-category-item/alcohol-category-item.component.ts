import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcohol-category-item',
  templateUrl: './alcohol-category-item.component.html',
  styleUrls: ['./alcohol-category-item.component.scss'],
})
export class AlcoholCategoryItemComponent implements OnInit {
  @Input() drink;
  constructor() {}

  ngOnInit(): void {}
}
