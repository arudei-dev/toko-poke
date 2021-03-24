import { MutationResult, ApolloQueryResult } from "@apollo/client";

export type TQueryHook<T, R> = (input: T) => ApolloQueryResult<R | undefined>;