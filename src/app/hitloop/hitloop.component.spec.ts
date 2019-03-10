import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitloopComponent } from './hitloop.component';

describe('HitloopComponent', () => {
  let component: HitloopComponent;
  let fixture: ComponentFixture<HitloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
