import { Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, IonCard, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   @ViewChild(IonCard, { read: ElementRef }) card !: ElementRef<HTMLIonCardElement>;
   private animation !: Animation;
   constructor(private animationCtrl: AnimationController) {}
   ngAfterViewInit() {
    this.animation = this.animationCtrl
     .create()
     .addElement(this.card.nativeElement)
     .duration(1500)
     .iterations(Infinity)
     .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
     .fromTo('opacity', '1', '0.2');
   }
    
    play() {
      this.animation.play();
     }
     pause() {
      this.animation.pause();
     }
     stop() {
      this.animation.stop();
     }
    }
    
    
    