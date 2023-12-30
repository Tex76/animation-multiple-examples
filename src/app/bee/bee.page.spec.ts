import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeePage } from './bee.page';

describe('BeePage', () => {
  let component: BeePage;
  let fixture: ComponentFixture<BeePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(BeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
