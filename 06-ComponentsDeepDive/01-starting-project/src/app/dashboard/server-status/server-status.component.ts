import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => console.log(this.currentStatus()));
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9 && rnd >= 0.5) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    {
      console.log('ngafterViewinit');
    }
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
