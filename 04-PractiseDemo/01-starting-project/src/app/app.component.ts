import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput, InvestmentResult } from './Investment-input.model';
import { InvestmentResutlsComponent } from './investment-resutls/investment-resutls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResutlsComponent],
})
export class AppComponent {



}
