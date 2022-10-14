export interface TreeNodeUI {
  label: string,
  leaf: boolean,
  loaded: boolean,
  expanded: boolean,
  level?: number,
  children?: TreeNodeUI[]
}
