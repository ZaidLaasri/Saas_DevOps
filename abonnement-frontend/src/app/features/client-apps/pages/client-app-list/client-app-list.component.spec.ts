import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppListComponent } from './client-app-list.component';

describe('ClientAppListComponent', () => {
  let component: ClientAppListComponent;
  let fixture: ComponentFixture<ClientAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAppListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
