import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdivComponent } from './tabdiv.component';

describe('TabdivComponent', () => {
  let component: TabdivComponent;
  let fixture: ComponentFixture<TabdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabdivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
