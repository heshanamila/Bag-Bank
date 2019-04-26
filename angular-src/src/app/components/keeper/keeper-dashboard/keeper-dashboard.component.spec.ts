import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperDashboardComponent } from './keeper-dashboard.component';

describe('KeeperDashboardComponent', () => {
  let component: KeeperDashboardComponent;
  let fixture: ComponentFixture<KeeperDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
