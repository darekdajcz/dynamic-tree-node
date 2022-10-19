import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { TreeNodeUI } from './model/tree-node-ui';
import { chevronDownBasicMediumUrl, chevronDownUrl } from '../images-url/images-url.const';
import { fadeIn, fadeOut, rotate } from '../animations/animations';

import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[nodeTemplate]' })
export class NodeTemplateDirective {
  @Input() nodeTemplate?: string
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'lib-node-recursion-template',
  templateUrl: './node-recursion-template.component.html',
  styleUrls: ['./node-recursion-template.component.scss'],
  animations: [rotate, fadeIn, fadeOut]
})
export class NodeRecursionTemplateComponent {
  @ContentChild(NodeTemplateDirective, { read: TemplateRef }) nodeTemplate!: TemplateRef<any>;
  @Input() treeNode?: TreeNodeUI;
  @Output() expand = new EventEmitter<TreeNodeUI>();
  chevronDownUrl = chevronDownUrl
  chevronDownBasicMediumUrl = chevronDownBasicMediumUrl

  expandEmitter(treeNode: TreeNodeUI): void {
    if (treeNode && !treeNode.leaf) {
      treeNode.expanded = !treeNode.expanded;
      this.expand.emit(treeNode);
    }
  }

}
