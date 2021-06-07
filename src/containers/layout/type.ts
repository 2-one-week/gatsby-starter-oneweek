import { ITags } from '@components/tag-list';

export type TPath = 'home' | 'post' | 'resume' | 'category' | 'tags' | '404';

export interface ILayout {
  path: TPath;
  tagName?: string;
  tags?: ITags[];
  onClickTag?: (tagNames: string) => void;
}
