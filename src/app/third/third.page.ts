import { Component, ViewChildren } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';
import { ElementRef, QueryList } from '@angular/core';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage {

  @ViewChildren(IonCard, { read: ElementRef }) cardElements !: QueryList<ElementRef<HTMLIonCardElement>>;


  Card1 !: Animation;
  Card2 !: Animation;
  Card3 !: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.toArray()[0].nativeElement)
      .duration(1500)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)');

    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.toArray()[1].nativeElement)
      .duration(1500)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)');

    const cardC = this.animationCtrl
      .create()
      .duration(1500)
      .addElement(this.cardElements.toArray()[2].nativeElement)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)');

      this.Card1 = cardA;
      this.Card2 = cardB;
      this.Card3 = cardC;
  }

  async play() {
    await this.Card1.play()
    await this.Card2.play()
    await this.Card3.play()
  }

  async pause() 
  {
    await this.Card1.pause()
    await this.Card2.pause()
    await this.Card3.pause()
  }

  async stop() {
    await this.Card1.stop()
    await this.Card2.stop()
    await this.Card3.stop()
  }
}
