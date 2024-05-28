import { MdGridView, MdList } from 'react-icons/md';
import { ButtonGroup, IconButton } from '@chakra-ui/react';

import { ArticleView } from '../../model/consts/consts';

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: MdGridView,
  },
  {
    view: ArticleView.BIG,
    icon: MdList,
  },
];

interface Props {
  currentView: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = ({ currentView, onViewClick }: Props) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ButtonGroup>
      {viewTypes.map(({ view, icon: Icon }) => (
        <IconButton
          variant='ghost'
          colorScheme='teal'
          size='sm'
          aria-label='View selector'
          key={view}
          icon={<Icon />}
          onClick={onClick(view)}
          isActive={view === currentView}
        />
      ))}
    </ButtonGroup>
  );
};
