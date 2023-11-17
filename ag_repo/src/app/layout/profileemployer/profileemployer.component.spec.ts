import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileemployerComponent } from './profileemployer.component';

describe('ProfileemployerComponent', () => {
  let component: ProfileemployerComponent;
  let fixture: ComponentFixture<ProfileemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileemployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
