import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsDetailComponent } from './politics-detail.component';

describe('PoliticsDetailComponent', () => {
  let component: PoliticsDetailComponent;
  let fixture: ComponentFixture<PoliticsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
