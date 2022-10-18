import { Component, OnInit } from '@angular/core';
import { TreeNodeUI } from './node-recursion-template/model/tree-node-ui';

@Component({
  selector: 'lib-responsive-tree-node',
  template: `
    <lib-node-recursion-template [treeNode]="treeNode" (expand)="nodeExpand($event)">
      <ng-template nodeTemplate let-treeNode>
        <h2>{{treeNode.label}}</h2>
      </ng-template>
    </lib-node-recursion-template>
  `
})
export class ResponsiveTreeNodeComponent implements OnInit {
  treeNode: TreeNodeUI = {
    label: 'Pierwsza gałąź - Rodzic',
    leaf: false,
    loaded: false,
    expanded: false,
    level: 0
  };

  treeNode2: TreeNodeUI[] = [
    {
    label: 'Druga gałąź - Dziecko nr 1',
    leaf: false,
    loaded: false,
    expanded: false,
    level: 0
  },{
      label: 'Druga gałąź - Dziecko nr 2',
      leaf: false,
      loaded: false,
      expanded: false,
      level: 0
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

  nodeExpand(node: TreeNodeUI): void {
    const res = this.treeNode2
    if (node && !node.loaded) {
            node.loaded = true;
            node.children = this.getChildren(res, node.level);
    }
    node.expanded = !node.expanded;
  }

  private getChildren(res: any[], level: number | undefined): TreeNodeUI[] {
    return res.map((treeNode) => ResponsiveTreeNodeComponent.getTreeNodeUI(treeNode, level));
  }

  private static getTreeNodeUI(treeNode: any, level: number | undefined): TreeNodeUI {
    return {
      label: treeNode.label,
      leaf: treeNode.leaf,
      loaded: false,
      expanded: false,
      level: (level === undefined || level === null) ? 0 : level + 1
    };
  }
}
