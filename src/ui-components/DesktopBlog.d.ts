/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DesktopBlogOverridesProps = {
    DesktopBlog?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "My Blogs"?: PrimitiveOverrideProps<TextProps>;
    Blog11065?: PrimitiveOverrideProps<ViewProps>;
    Blog11071?: PrimitiveOverrideProps<ViewProps>;
    Blog11077?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type DesktopBlogProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DesktopBlogOverridesProps | undefined | null;
}>;
export default function DesktopBlog(props: DesktopBlogProps): React.ReactElement;
