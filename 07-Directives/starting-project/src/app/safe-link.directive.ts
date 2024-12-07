import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]', // this directive is applied to the anchor tag
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  @Input({ alias: 'appSafeLink' }) queryParam: string = 'myapp';

  constructor(private hostElementRef: ElementRef<HTMLAnchorElement>) {} // ineject service

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave this page?'
    );
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href; // the href of the anchor tag (the link).
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam;
      return;
    }

    event.preventDefault();
  }
}
