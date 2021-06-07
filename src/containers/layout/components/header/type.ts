import { ITags } from '@components/tag-list';
import { TPath } from '@containers/layout/type';

export interface IHeader {
  title: string;
  path: TPath;
  tagName?: string;
  tags?: ITags[];
  onClickTag?: (tagNames: string) => void;
}
