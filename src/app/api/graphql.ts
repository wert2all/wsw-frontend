import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
}

export enum Status {
  error = 'error',
  pending = 'pending',
  success = 'success',
}

export type MinimalPreview = { id: number; status: Status; url: string };

export type CreateTokenVariables = Exact<{ [key: string]: never }>;

export type CreateToken = { token: string };

export type AddUrlVariables = Exact<{
  token: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;

export type AddUrl = { preview?: MinimalPreview | null };

export const MinimalPreview = gql`
  fragment MinimalPreview on MinimalPreviewData {
    id
    status
    url
  }
`;
export const CreateTokenDocument = gql`
  mutation CreateToken {
    token: createToken
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateTokenMutation extends Apollo.Mutation<
  CreateToken,
  CreateTokenVariables
> {
  override document = CreateTokenDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AddUrlDocument = gql`
  mutation AddUrl($token: String!, $url: String!) {
    preview: addUrl(token: $token, url: $url) {
      ...MinimalPreview
    }
  }
  ${MinimalPreview}
`;

@Injectable({
  providedIn: 'root',
})
export class AddUrlMutation extends Apollo.Mutation<AddUrl, AddUrlVariables> {
  override document = AddUrlDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface MutationOptionsAlone<T, V>
  extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApiClient {
  constructor(
    private createTokenMutation: CreateTokenMutation,
    private addUrlMutation: AddUrlMutation
  ) {}

  createToken(
    variables?: CreateTokenVariables,
    options?: MutationOptionsAlone<CreateToken, CreateTokenVariables>
  ) {
    return this.createTokenMutation.mutate(variables, options);
  }

  addUrl(
    variables: AddUrlVariables,
    options?: MutationOptionsAlone<AddUrl, AddUrlVariables>
  ) {
    return this.addUrlMutation.mutate(variables, options);
  }
}
