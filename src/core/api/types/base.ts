import { MutationResult, ApolloQueryResult, QueryLazyOptions, ApolloError } from "@apollo/client";

export type TQueryHook<T, R> = (input: T) => ApolloQueryResult<R | undefined>


export type TLazyQueryHook<T, R> = () => [
  (options?: QueryLazyOptions<T> | undefined) => void,
  {
    called: boolean,
    loading: boolean, 
    error?: ApolloError, 
    data?: R, 
  }
];