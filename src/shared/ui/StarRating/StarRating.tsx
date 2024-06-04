import { HStack, Icon } from '@chakra-ui/react';
import { MdStar, MdStarOutline } from 'react-icons/md';
import { useState } from 'react';

const stars = [1, 2, 3, 4, 5];

interface Props {
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

export const StarRating = ({
  onSelect,
  selectedStars = 0,
  size = 6,
}: Props) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <HStack spacing={0}>
      {stars.map((starNumber) => (
        <Icon
          key={starNumber}
          as={currentStarsCount >= starNumber ? MdStar : MdStarOutline}
          boxSize={size}
          color='teal'
          _hover={{
            cursor: isSelected ? 'auto' : 'pointer',
          }}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </HStack>
  );
};
