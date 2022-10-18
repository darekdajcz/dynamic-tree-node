import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNodeUI } from './model/tree-node-ui';
import { chevronDownUrl } from '../images-url/images-url.const';
import { fadeIn, fadeOut, rotate } from '../animations/animations';

@Component({
  selector: 'lib-node-recursion-template',
  templateUrl: './node-recursion-template.component.html',
  styleUrls: ['./node-recursion-template.component.scss'],
  animations: [rotate, fadeIn, fadeOut
  ]
})
export class NodeRecursionTemplateComponent {

  chevronDownUrl = chevronDownUrl
  @Input() treeNode?: TreeNodeUI;
  @Output() expandEmitter = new EventEmitter<TreeNodeUI>();
  expanded = 'rotated';

  expand(treeNode: TreeNodeUI): void {
    if (!treeNode.leaf) {
      this.expandEmitter.emit(treeNode);
    }
  }

  toggle(): void {
    this.expanded = this.expanded === 'default' ? 'rotated' : 'default';
  }
}
