import {
  Directive,
  effect,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  @Input({ required: true, alias: 'appAuth' }) userType!: Permission;

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); // access the template and its contents
  private viewContainerRef = inject(ViewContainerRef); // templateref gives you access to what to render, while view container ref tells you where to render it.
  constructor() {
    effect(() => {
      if (this.authService.activePermission() == this.userType) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
