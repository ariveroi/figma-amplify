/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Tiers?: PrimitiveOverrideProps<TextProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    "Move to the cloud, Elevate your business to the next level"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
