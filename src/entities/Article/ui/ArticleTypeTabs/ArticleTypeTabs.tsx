import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../model/consts/consts';

interface Props {
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ type, onChangeType }: Props) => {
  const { t } = useTranslation();

  const tabs = useMemo(
    () => [
      {
        value: ArticleType.ALL,
        title: t('all'),
      },
      {
        value: ArticleType.IT,
        title: t('it'),
      },
      {
        value: ArticleType.SCIENCE,
        title: t('science'),
      },
      {
        value: ArticleType.ECONOMICS,
        title: t('economics'),
      },
    ],
    [t]
  );

  return (
    <Tabs
      size='sm'
      variant='soft-rounded'
      colorScheme='teal'
      index={tabs.findIndex(({ value }) => value === type)}
      onChange={(index) => onChangeType(tabs[index].value)}
    >
      <TabList>
        {tabs.map(({ title }) => (
          <Tab key={title}>{title}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
