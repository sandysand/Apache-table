
import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'cricket',
  styleUrls: ['cricket.component.css'],
  templateUrl: 'cricket.component.html',
})
export class CricketComponent {
  displayedColumns = ['position', 'name', 'age', 'country'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  age: number;
  country: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'sachin', age: 37, country: 'IND'},
  {position: 2, name: 'pointing', age: 38, country: 'AUS'},
  {position: 3, name: 'dhoni', age: 34, country: 'IND'},
  {position: 4, name: 'kohli', age: 29, country: 'IND'},
  {position: 5, name: 'rohith', age: 30, country: 'IND'},
  {position: 6, name: 'ashwin', age: 30, country: 'IND'},
  {position: 7, name: 'devillers', age: 32, country: 'SA'},
];