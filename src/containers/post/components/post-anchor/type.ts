export interface IFilteredAnchor {
  href: string;
  title: string;
  depth: number;
  children: IFilteredAnchor[];
}
