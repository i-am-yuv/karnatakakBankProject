import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoPortalComponent } from './ceo-portal.component';

describe('CeoPortalComponent', () => {
  let component: CeoPortalComponent;
  let fixture: ComponentFixture<CeoPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
