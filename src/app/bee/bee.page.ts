import { Component } from '@angular/core';

declare var dynamics: any;

@Component({
  selector: 'app-bee',
  templateUrl: 'bee.page.html',
  styleUrls: ['bee.page.scss'],
})
export class BeePage {

  private btnAnimated : boolean = false;
  constructor() {

  }

  Up(){
    const ele = document.getElementById('beeImage');
    if(!this.btnAnimated){
      this.btnAnimated = true;
      dynamics.animate(ele, {
        translateX: 0,
        translateY: -100
      },
      {
        type: dynamics.spring ,
        duration: 500,
        complete: () => {
          this.btnAnimated = false
        }
      })
    }
    
  }

  Left(){
    const ele = document.getElementById('beeImage');
    if(!this.btnAnimated){
      this.btnAnimated = true;
      dynamics.animate(
        ele, 
        {
        translateX: -100,
        translateY: 0
      },
      {
        type: dynamics.spring ,
        duration: 500,
        complete: () => {
          this.btnAnimated = false
        }
      })
    }

  }

  Right(){
    const ele = document.getElementById('beeImage');
    if(!this.btnAnimated){
      this.btnAnimated = true;
      dynamics.animate(ele, {
        translateX: 100,
        translateY: 0
      },
      {
        type: dynamics.spring ,
        duration: 500,
        complete: () => {
          this.btnAnimated = false
        }
      })
    }
  }

  Down(){
    const ele = document.getElementById('beeImage');
    if(!this.btnAnimated){
      this.btnAnimated = true;
      dynamics.animate(ele, 
        {
        translateX: 0,
        translateY: 100
      },
      {
        type: dynamics.spring ,
        duration: 500,
        complete: () => {
          this.btnAnimated = false
        }
      })
    }
  }

}
