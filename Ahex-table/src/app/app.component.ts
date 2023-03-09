import { Component } from '@angular/core';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  width: string = '1000px';
  height: string = '30px';
  tableWidth = '20%'
  background: any = 'red';
  products = [
    { id: '1', name: 'Rice', qty: 10, price: 200 },
    { id: '2',name: 'Beans', qty: 22, price: 300 },
    {  id: '3',name: 'Bananna', qty: 13, price: 400 },
    {  id: '4',name: 'pupmkin', qty: 44, price: 900 },
    {  id: '5',name: 'sugar', qty: 75, price: 800 },
    {  id: '6',name: 'chilly', qty: 36, price: 600 },
    {  id: '7',name: 'lemon', qty: 67, price: 500 },
    { id: '8', name: 'salt', qty: 68, price: 200 },
    {  id: '9',name: 'apple', qty: 19, price: 200 },
    {id: '10', name: 'papaya', qty: 10, price: 400 },
  

  ]
  
  title = 'demoTable';

  constructor(){}

  ngOnInit(){
    
  }
  
}
