import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcohol-category',
  templateUrl: './alcohol-category.component.html',
  styleUrls: ['./alcohol-category.component.scss'],
})
export class AlcoholCategoryComponent implements OnInit {
  @Input() itemCategory;
  constructor() {}

  ngOnInit(): void {}
}
