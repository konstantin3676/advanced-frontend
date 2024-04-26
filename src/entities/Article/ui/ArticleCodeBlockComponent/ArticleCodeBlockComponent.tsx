import { Box, Code, Icon, IconButton } from '@chakra-ui/react';
import { MdOutlineContentCopy } from 'react-icons/md';

import { ArticleCodeBlock } from '../../model/types/article';

interface Props {
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ block }: Props) => {
  const onCopy = () => {
    navigator.clipboard.writeText(block.code);
  };

  return (
    <Box as='pre' pos='relative'>
      <IconButton
        aria-label='Copy code'
        position='absolute'
        top={4}
        right={4}
        icon={<Icon as={MdOutlineContentCopy} boxSize={6} />}
        onClick={onCopy}
      />
      <Code p='4' w='100%' overflow='auto'>
        {block.code}
      </Code>
    </Box>
  );
};
