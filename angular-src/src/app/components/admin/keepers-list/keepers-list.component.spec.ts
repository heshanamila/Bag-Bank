import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepersListComponent } from './keepers-list.component';

describe('KeepersListComponent', () => {
  let component: KeepersListComponent;
  let fixture: ComponentFixture<KeepersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
