import { ArticleDetailsCommentsSchema } from './articleDetailsComments';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendations';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
