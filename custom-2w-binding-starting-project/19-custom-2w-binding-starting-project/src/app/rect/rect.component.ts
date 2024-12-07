import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // if we need to make custom 2 way binding we must use input and ouput and the name of the output must follow this standard
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // onReset() {
  //   this.sizeChange.emit({
  //     width: '200',
  //     height: '100',
  //   });
  // }

  // another solution starting from angular 17
  size = model.required<{ width: string; height: string }>(); // size is type of modelSignal

  onReset() {
    this.size.set({
      width: '200',
      height: '100',
    });
  }

  // this solution is correct but not the best becauese the size is the input it is not meant to communicate back to the component that passed the input value (appcomponent)
  // instead we need the custom 2 way binding
  // onReset() {
  //   this.size.width = '100';
  //   this.size.height = '100';
  // }
}
