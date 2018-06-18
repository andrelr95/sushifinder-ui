import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiLoginComponent } from './sushi-login.component';

describe('SushiLoginComponent', () => {
  let component: SushiLoginComponent;
  let fixture: ComponentFixture<SushiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
