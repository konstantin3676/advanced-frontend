import { Avatar, MenuButton } from '@chakra-ui/react';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

export const AvatarDropdown = () => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('admin'),
                href: getRouteAdminPanel(),
              },
            ]
          : []),
        {
          content: t('profile'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
    >
      <MenuButton
        as={Avatar}
        size='sm'
        src={authData.avatar}
        cursor='pointer'
      ></MenuButton>
    </Dropdown>
  );
};
