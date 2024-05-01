import { IconType } from 'react-icons';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: IconType;
  authOnly?: boolean;
}
