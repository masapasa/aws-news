import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class ArticleConnection {
  readonly items?: (Article | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<ArticleConnection>);
}

export declare class ArticleStatistics {
  readonly total: number;
  readonly daily: (DailyStatistic | null)[];
  constructor(init: ModelInit<ArticleStatistics>);
}

export declare class DailyStatistic {
  readonly date: string;
  readonly newPosts?: number;
  constructor(init: ModelInit<DailyStatistic>);
}

export declare class SizedImage {
  readonly md?: string;
  readonly lg?: string;
  readonly xl?: string;
  constructor(init: ModelInit<SizedImage>);
}

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly image?: string;
  readonly published: boolean;
  readonly publishedAt: string;
  readonly author?: string;
  readonly contentUri?: string;
  readonly excerpt?: string;
  readonly tags?: (string | null)[];
  readonly blog?: Blog;
  readonly sizedImage?: SizedImage;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

export declare class Blog {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly lastImportAt?: string;
  readonly articles?: (Article | null)[];
  readonly stats?: ArticleStatistics;
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}