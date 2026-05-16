import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppCreateComponent } from './client-app-create.component';

describe('ClientAppCreateComponent', () => {
  let component: ClientAppCreateComponent;
  let fixture: ComponentFixture<ClientAppCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAppCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAppCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
