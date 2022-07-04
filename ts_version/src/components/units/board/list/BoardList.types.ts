import { ApolloQueryResult } from '@apollo/client';
import { MouseEvent } from 'react';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../commons/types/generated/types';

export interface IBoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  refetchBoardsCount: (variables?: Partial<IQueryFetchBoardsCountArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>;
  onLoadMore: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
