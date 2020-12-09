// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Article, Blog, ArticleConnection, ArticleStatistics, DailyStatistic, SizedImage } = initSchema(schema);

export {
  Article,
  Blog,
  ArticleConnection,
  ArticleStatistics,
  DailyStatistic,
  SizedImage
};