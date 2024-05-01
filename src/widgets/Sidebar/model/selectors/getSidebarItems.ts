import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import {
  MdInfoOutline,
  MdOutlineAccountCircle,
  MdOutlineArticle,
  MdOutlineHome,
} from 'react-icons/md';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: `${RoutePath.profile}${userData.id}`,
        text: 'profile',
        icon: MdOutlineAccountCircle,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'articles',
        icon: MdOutlineArticle,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
