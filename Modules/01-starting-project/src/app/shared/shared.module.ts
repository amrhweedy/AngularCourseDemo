import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent], // when we import the sharedModule in the appModule now we can use the cardComponent inside the components which in the appModule because we export the cardComponent
})
export class SharedModule {}
