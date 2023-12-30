import { Component } from '@angular/core';
declare var dynamics: any;
@Component({
  selector: 'app-fourth',
  templateUrl: 'fourth.page.html',
  styleUrls: ['fourth.page.scss'],
})
export class FourthPage {
   private btnAnimate: boolean = false;
   private CardShow: boolean = false;
   
   constructor() {}
   animateCard() {
    var el = document.getElementById('myCard');
  
    if (!this.btnAnimate) {
     this.btnAnimate = true;
  
     if (!this.CardShow) {
        dynamics.animate(
         el,
         {
          translateY: 0,
          translateX: 150,
         },
         {
          type: dynamics.gravity,
          duration: 1300,
          complete: () => {
           this.btnAnimate = false;
          },
         }
        );
        this.CardShow = true;
       }
    else {
          dynamics.animate(
           el,
           {
            translateY: 0,
            translateX: 0,
           },
           {
            type: dynamics.gravity,
            duration: 100,
            complete: () => {
             this.btnAnimate = false;
            },
           }
          );
          this.CardShow = false;
         }
        }
       }
      }
      
          



