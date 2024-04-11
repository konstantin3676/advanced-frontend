import { IconType } from 'react-icons';
import {
  MdInfoOutline,
  MdOutlineAccountCircle,
  MdOutlineHome,
} from 'react-icons/md';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: IconType;
  authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'main',
    icon: MdOutlineHome,
  },
  {
    path: RoutePath.about,
    text: 'about-us',
    icon: MdInfoOutline,
  },
  {
    path: RoutePath.profile,
    text: 'profile',
    icon: MdOutlineAccountCircle,
    authOnly: true,
  },
];
