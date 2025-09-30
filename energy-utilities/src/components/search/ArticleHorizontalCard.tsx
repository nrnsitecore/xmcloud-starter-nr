import type { ActionProp, ItemClickedAction } from '@sitecore-search/react';
import { ArticleCard } from '@sitecore-search/ui';
import Image from 'next/image'

type ArticleCardItemCardProps = {
  className?: string;
  displayText?: boolean;
  article: any;
  onItemClick: ActionProp<ItemClickedAction>;
  index: number;
};

const ArticleHorizontalItemCard = ({ className = '', article, }: ArticleCardItemCardProps) => {
  let validImageUrl = article.image_url?.trim() ? article.image_url : "https://placehold.co/500x300?text=No Image";

  if (validImageUrl.includes('filters:no_upscale')) {
    validImageUrl = undefined
  }

  return (
    <ArticleCard.Root
      key={article.id}
      className={`group flex flex-row my-4 flex-nowrap max-h-52 w-full relative border border-gray-200 dark:border-gray-600 rounded-md hover:shadow-lg hover:transition-all hover:ease-linear	hover:duration-300 focus-within:transition-all focus-within:ease-linear focus-within:duration-300 focus-within:hover:shadow-lg ${className} bg-white rounded-lg shadow-sm border p-6 transition-shadow `}
    >
       {validImageUrl &&
      <div className="w-[25%] flex-none overflow-hidden bg-gray-200 rounded">
        <Image
          src={validImageUrl}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
          alt="alt"
          width={500}
          height={115}
        />
      </div>}
      <div className="pl-4 grow flex-col">
        <a
          className="focus:outline-indigo-500"
          href={article.url}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="text-lg font-semibold text-gray-900 mb-2">{article.name || article.title}</ArticleCard.Title>
        </a>
        <ArticleCard.Subtitle className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {article.description}
        </ArticleCard.Subtitle>
        <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent text-primary-foreground absolute top-4 right-4 bg-gray-300">{article.type}</div>
      </div>
    </ArticleCard.Root>
  );
};
export default ArticleHorizontalItemCard;
