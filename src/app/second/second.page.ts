import { Component, OnInit } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  animation !: Animation;
  @ViewChild(IonCard, { read: ElementRef }) card !: ElementRef<HTMLIonCardElement>;

  constructor(public animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.card.nativeElement)
    .duration(1000)
    .iterations(3)
    .fromTo('color', 'red', 'blue')
    .fromTo('transform', 'translateX(0px)', 'translateX(500px)');
  }


  Play() {
    this.animation.play();
  }

  Pause(){
    this.animation.pause();
  }

  Stop(){
    this.animation.stop();
  }


}
