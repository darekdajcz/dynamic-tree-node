import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeRecursionTemplateComponent } from './node-recursion-template.component';

describe('NodeRecursionTemplateComponent', () => {
  let component: NodeRecursionTemplateComponent;
  let fixture: ComponentFixture<NodeRecursionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeRecursionTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeRecursionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
