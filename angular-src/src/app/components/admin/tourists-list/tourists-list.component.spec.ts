import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristsListComponent } from './tourists-list.component';

describe('TouristsListComponent', () => {
  let component: TouristsListComponent;
  let fixture: ComponentFixture<TouristsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
