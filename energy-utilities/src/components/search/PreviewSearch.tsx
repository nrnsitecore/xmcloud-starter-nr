import type { ChangeEvent, SyntheticEvent } from 'react';
import { useCallback } from 'react';
import type { PreviewSearchInitialState } from '@sitecore-search/react';
import { WidgetDataType, usePreviewSearch, widget } from '@sitecore-search/react';
import { ArticleCard, PreviewSearch } from '@sitecore-search/ui';
import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Spinner from './Spinner';
import SuggestionBlock from './SuggestionBlock';


const SEARCH_CONFIG = {
  source: process.env.NEXT_PUBLIC_SEARCH_SOURCE as string,
};

type ArticleModel = {
  id: string;
  title: string;
  image_url: string;
  url: string;
  source_id?: string;
  name: string;
};

type PreviewSearchComponentProps = {
  defaultItemsPerPage?: number;
  isOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;

export const PreviewSearchComponent = ({ defaultItemsPerPage = 6, isOpen, setIsSearchOpen }: PreviewSearchComponentProps) => {
  const router = useRouter();
  const {
    actions: { onKeyphraseChange },
    queryResult,
    queryResult: {
      isFetching,
      isLoading,
      data: { suggestion: { title_context_aware: articleSuggestions = [] } = {} } = {},
    },
  } = usePreviewSearch<ArticleModel, InitialState>({
    state: {
      suggestionsList: [{ suggestion: 'title_context_aware', max: 6 }],
      itemsPerPage: defaultItemsPerPage,
    },
    query: (query): any => {
        if (SEARCH_CONFIG.source !== '') {
            const sources = SEARCH_CONFIG.source.split('|');
            sources.forEach(source => {
                query.getRequest().addSource(source.trim());
            });
        }
    },
  });

  const loading = isLoading || isFetching;
  const keyphraseHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      onKeyphraseChange({ keyphrase: target.value });
    },
    [onKeyphraseChange],
  );
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (isOpen) setIsSearchOpen(false)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const target = e.target.query as HTMLInputElement;
    router.push(`/search?q=${target.value}`);
    target.value = '';
  };
  return (
    <PreviewSearch.Root>
      <form onSubmit={handleSubmit} className="flex-1">
        <PreviewSearch.Input
          name="query"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          onChange={keyphraseHandler}
          autoComplete="off"
          placeholder="Search content, grid status..."
        />
      </form>
      <PreviewSearch.Content
        className="flex justify-center pt-0 h-[400px] shadow-[2px_5px_5px_5px_rgba(0,0,0,0.3)] transition-opacity	w-[var(--radix-popover-trigger-width)] bg-gray-100 dark:bg-gray-800"
      >
        <Spinner loading={loading} />

        {!loading  &&
          <React.Fragment key="1">
            {articleSuggestions.length > 0 && (
              <PreviewSearch.Suggestions className="block box-border list-none w-[16rem] text-sm">
                <SuggestionBlock blockId={'title_context_aware'} items={articleSuggestions} title={'Suggestions'} />
              </PreviewSearch.Suggestions>
            )}
            <PreviewSearch.Results defaultQueryResult={queryResult}>
              {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
                <PreviewSearch.Items
                  data-loading={loading}
                  className="flex flex-[3] bg-white dark:bg-gray-700 overflow-y-auto data-[loading=false]:grid data-[loading=false]:list-none data-[loading=false]:m-0 data-[loading=false]:p-2 data-[loading=false]:gap-3 data-[loading=false]:grid-cols-3"
                >
                  <Spinner loading={loading} />
                  {!loading &&
                    articles.map((article) => (
                      <PreviewSearch.Item key={article.id} asChild>
                        <PreviewSearch.ItemLink
                          href={article.url}
                          className="flex box-border no-underline w-full text-black focus:shadow-md"
                        >
                          <ArticleCard.Root className="w-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-md p-2 cursor-pointer block border-transparent border-solid border text-center focus-within:shadow-[2px_2px_4px_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.8)] dark:text-white">
                            <div className="m-auto mb-[10px] relative h-[6em] flex justify-center items-center overflow-hidden">
                              <Image
                                src={article.image_url}
                                className="block w-auto max-w-full h-auto max-h-full"
                                alt="alt"
                                width={200}
                                height={100}
                              />
                            </div>
                            <ArticleCard.Title className="max-h-[2rem] overflow-hidden m-0 mb-2 text-xs">
                              {article.name}
                            </ArticleCard.Title>
                          </ArticleCard.Root>
                        </PreviewSearch.ItemLink>
                      </PreviewSearch.Item>
                    ))}
                </PreviewSearch.Items>
              )}
            </PreviewSearch.Results>
          </React.Fragment>
        }
      </PreviewSearch.Content>
    </PreviewSearch.Root>
  );
};

const PreviewSearchWidget = widget(PreviewSearchComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
export default PreviewSearchWidget;
