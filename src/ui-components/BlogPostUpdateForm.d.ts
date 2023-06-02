/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BlogPost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogPostUpdateFormInputValues = {
    title?: string;
    image?: string;
    content?: string;
    createdAt?: string;
    subtitle?: string;
};
export declare type BlogPostUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogPostUpdateFormOverridesProps = {
    BlogPostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    subtitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogPostUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogPostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogPost?: BlogPost;
    onSubmit?: (fields: BlogPostUpdateFormInputValues) => BlogPostUpdateFormInputValues;
    onSuccess?: (fields: BlogPostUpdateFormInputValues) => void;
    onError?: (fields: BlogPostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogPostUpdateFormInputValues) => BlogPostUpdateFormInputValues;
    onValidate?: BlogPostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogPostUpdateForm(props: BlogPostUpdateFormProps): React.ReactElement;
