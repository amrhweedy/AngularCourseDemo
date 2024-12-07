import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') classNam = 'control';     // instead of using host object
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }

  // constructor() {
  //   afterRender(() => console.log('after render'));
  //   afterNextRender(() => console.log('after next render'));
  // }

  label = input.required<string>();
  private element = inject(ElementRef); // access the host element(app-control)

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick() {
    console.log('clicked');
    console.log(this.element);
    //  console.log(this.control);
    console.log(this.control());
  }
}
