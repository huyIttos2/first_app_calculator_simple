import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  result: number;
  sum(first: number, second: number) {
   this.result = +first + +second;

}
sub(first: number, second: number) {
  this.result = +first - +second;

}
div(first: number, second: number) {
  this.result = +first / +second;

}
multi(first: number, second: number) {
  this.result = +first * +second;

}
}
