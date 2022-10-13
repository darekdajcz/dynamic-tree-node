import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTreeNodeComponent } from './responsive-tree-node.component';

describe('ResponsiveTreeNodeComponent', () => {
  let component: ResponsiveTreeNodeComponent;
  let fixture: ComponentFixture<ResponsiveTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveTreeNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
