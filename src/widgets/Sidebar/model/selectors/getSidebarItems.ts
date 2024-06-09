import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
  MdInfoOutline,
  MdOutlineAccountCircle,
  MdOutlineArticle,
  MdOutlineHome,
} from 'react-icons/md';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'main',
      icon: MdOutlineHome,
    },
    {
      path: getRouteAbout(),
      text: 'about-us',
      icon: MdInfoOutline,
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile',
        icon: MdOutlineAccountCircle,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'articles',
        icon: MdOutlineArticle,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
