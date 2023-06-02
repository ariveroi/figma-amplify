/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogPostCreateFormInputValues = {
    title?: string;
    image?: string;
    content?: string;
    createdAt?: string;
    subtitle?: string;
};
export declare type BlogPostCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogPostCreateFormOverridesProps = {
    BlogPostCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextAreaFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    subtitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogPostCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogPostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogPostCreateFormInputValues) => BlogPostCreateFormInputValues;
    onSuccess?: (fields: BlogPostCreateFormInputValues) => void;
    onError?: (fields: BlogPostCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogPostCreateFormInputValues) => BlogPostCreateFormInputValues;
    onValidate?: BlogPostCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogPostCreateForm(props: BlogPostCreateFormProps): React.ReactElement;
