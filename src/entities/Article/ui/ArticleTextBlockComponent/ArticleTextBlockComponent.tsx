import { Flex, Heading, Text } from '@chakra-ui/react';

import { ArticleTextBlock } from '../../model/types/article';

interface Props {
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({ block }: Props) => {
  return (
    <Flex direction='column' gap={3}>
      {block.title && (
        <Heading as='h4' size='md' fontWeight='medium'>
          {block.title}
        </Heading>
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph}>{paragraph}</Text>
      ))}
    </Flex>
  );
};
