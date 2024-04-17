import { Box } from '@chakra-ui/react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Box></Box>;
  }

  return <ArticleDetails id={id} />;
};

export default ArticleDetailsPage;
