import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Rating } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('main-page')}
      <Rating
        hasFeedback
        title='Как вам статья?'
        feedbackTitle='Оставьте отзыв о статье'
      />
    </Page>
  );
};

export default MainPage;
