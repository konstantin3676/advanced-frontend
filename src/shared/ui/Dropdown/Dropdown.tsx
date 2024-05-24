import { Menu, MenuItem, MenuList } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface DropdownItem {
  content?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

interface Props {
  items: DropdownItem[];
  children: React.ReactNode;
}

export const Dropdown = ({ items, children }: Props) => {
  return (
    <Menu>
      {children}
      <MenuList minW='max-content'>
        {items.map(({ content, onClick, disabled, href }, index) => {
          if (href) {
            return (
              <MenuItem
                key={index}
                as={ReactRouterLink}
                to={href}
                disabled={disabled}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem key={index} onClick={onClick} disabled={disabled}>
              {content}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
