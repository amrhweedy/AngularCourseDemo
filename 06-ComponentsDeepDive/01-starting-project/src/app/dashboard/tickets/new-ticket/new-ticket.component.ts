import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  output,
  ViewChild,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  //   onSubmit(titleElement: HTMLInputElement, textElement: HTMLTextAreaElement) {
  //     console.dir(titleElement); // use consle.dir to print the title element as javascript object not html elemnt
  //     console.dir(textElement); // use consle.dir to print the title element as javascript object not html elemnt
  //     console.log(titleElement.value);
  //     console.log(textElement.value);
  //   }

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //private button = viewChild<ButtonComponent>(ButtonComponent); // if we need to hold the component, the selector here is the name of the component
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  //@Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, text: string) {
    this.add.emit({
      title: title,
      text: text,
    });
    this.form()?.nativeElement.reset();
  }
}
