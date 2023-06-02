/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlogPost, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogPostOverridesProps = {
    BlogPost?: PrimitiveOverrideProps<ViewProps>;
    "This is the blog title"?: PrimitiveOverrideProps<TextProps>;
    "This is the blog subtitle"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ..."?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    "technology-785742_1920 3"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BlogPostProps = React.PropsWithChildren<Partial<ViewProps> & {
    blogPost?: BlogPost;
    user?: User;
} & {
    overrides?: BlogPostOverridesProps | undefined | null;
}>;
export default function BlogPost(props: BlogPostProps): React.ReactElement;
