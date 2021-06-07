import { ITags } from '@components/tag-list';

export interface INavigation {
  tagName: string;
  tags: ITags[];
  onClickTag: (tagName: string) => void;
}
