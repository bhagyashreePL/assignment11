import { Component } from '@angular/core';
import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {

  cStates = ['Maharashtra', 'Gujarat',
            ' Uttar Pradesh '];

  model1 : any= new Hero( '','', '',18,'','','','','');
  model : any= {};
  
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }


}
