import { Component, OnInit } from '@angular/core';
import {Ingrediants} from 'src/app/shared/ingrediants.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingrediants:Ingrediants[]=[
  new Ingrediants('Maida',200),
  new Ingrediants('Patta Gobhi',20),
  new Ingrediants('salt',42)
];

  constructor() { }

  ngOnInit(): void {
  }

}
