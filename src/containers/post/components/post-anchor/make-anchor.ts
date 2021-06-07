import { IFilteredAnchor } from './type';

export const filterAnchorDetails = (
  anchors: HTMLCollectionOf<Element>,
): IFilteredAnchor[] => {
  let last_depth = 0;
  const newAnchors = [].slice.call(anchors).map((anchor: any) => {
    let depth = parseInt(anchor.parentElement.nodeName[1]);
    if (last_depth !== 0 && depth > last_depth) depth = last_depth + 1;
    last_depth = depth;
    return {
      href: '#' + anchor.parentElement.id,
      title: anchor.parentElement.innerText,
      depth: depth,
      children: [],
    };
  });
  constructTree(newAnchors);
  return newAnchors;
};

export const constructTree = (list: IFilteredAnchor[]) => {
  let deleteNode = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i].depth + 1 === list[j].depth) {
        list[i].children.push(list[j]);
        deleteNode.push(j);
      } else if (list[i].depth >= list[j].depth) break;
    }
  }
  deleteNode.sort((a, b) => b - a).forEach((index) => list.splice(index, 1));
};
