import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from '@angular/core';
import { User } from './user.mode';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>(); // seelct is a custom event, EventEmitter<> => is a generic type so here we determine the type of the data which the event will emit
  //select = output<string>() => we can use output function instead of using @Output decorator, output function under the hood create object from event emitter, so here select is not a signal property but still event emitter, this way is shorter than using using @outpt decorator and defines object from EventEmitter class manually

  get imagePath() {
    return 'assets/users/' + this.user.avatar; //the imagePath here will be called and executed when anything happens to this component not only if the avatar value has changed
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // define input properties using signal
  // avatar = input.required<string>(); // readoly property I can't set value inside the comp
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar()); // angualr will recmpute this imagePath value when only the avatar value has changed
}
