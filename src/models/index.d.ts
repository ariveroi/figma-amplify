import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly BlogPosts?: (BlogPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly BlogPosts: AsyncCollection<BlogPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBlogPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly subtitle?: string | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

type LazyBlogPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly subtitle?: string | null;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

export declare type BlogPost = LazyLoading extends LazyLoadingDisabled ? EagerBlogPost : LazyBlogPost

export declare const BlogPost: (new (init: ModelInit<BlogPost>) => BlogPost) & {
  copyOf(source: BlogPost, mutator: (draft: MutableModel<BlogPost>) => MutableModel<BlogPost> | void): BlogPost;
}