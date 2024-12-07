import { CurrencyPipe } from '@angular/common';
import { InvestmentResult } from './../Investment-input.model';
import { Component, computed, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-resutls',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-resutls.component.html',
  styleUrl: './investment-resutls.component.css',
})
export class InvestmentResutlsComponent {
  // @Input() results?: InvestmentResult[];
  // results = input<InvestmentResult[]>(); // results is a singnal

  constructor(private investmentService: InvestmentService) {}

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // here results is a readonly signal so i cannot change the result which in the service from outside components
  // computed make the result is a readonly signal
  results = computed(() => this.investmentService.resultsData());

  //or
  //results = this.investmentService.resultsData // this is a writable

  //or => if i need to make it readonly signal
  //results = this.investmentService.resultsData.asReadonly()
}
