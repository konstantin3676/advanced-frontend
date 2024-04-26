import { Box, Image, Text } from '@chakra-ui/react';

import { ArticleImageBlock } from '../../model/types/article';

interface Props {
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ block }: Props) => {
  return (
    <Box>
      <Image src={block.src} alt={block.title} />
      {block.title && <Text align='center'>{block.title}</Text>}
    </Box>
  );
};
