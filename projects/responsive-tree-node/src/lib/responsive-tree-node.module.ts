import { NgModule } from '@angular/core';
import { ResponsiveTreeNodeComponent } from './responsive-tree-node.component';
import {
  NodeRecursionTemplateComponent,
  NodeTemplateDirective
} from './node-recursion-template/node-recursion-template.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ResponsiveTreeNodeComponent,
    NodeRecursionTemplateComponent,
    NodeTemplateDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ResponsiveTreeNodeComponent
  ]
})
export class ResponsiveTreeNodeModule { }
