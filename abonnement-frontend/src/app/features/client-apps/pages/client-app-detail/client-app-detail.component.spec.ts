import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppDetailComponent } from './client-app-detail.component';

describe('ClientAppDetailComponent', () => {
  let component: ClientAppDetailComponent;
  let fixture: ComponentFixture<ClientAppDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAppDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
