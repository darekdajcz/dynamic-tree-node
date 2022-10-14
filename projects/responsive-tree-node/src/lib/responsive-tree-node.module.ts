import { NgModule } from '@angular/core';
import { ResponsiveTreeNodeComponent } from './responsive-tree-node.component';
import { NodeRecursionTemplateComponent } from './node-recursion-template/node-recursion-template.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ResponsiveTreeNodeComponent,
    NodeRecursionTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveTreeNodeComponent
  ]
})
export class ResponsiveTreeNodeModule { }
