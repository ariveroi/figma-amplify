/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Frame1Props } from "./Frame1";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MacBookPro141OverridesProps = {
    MacBookPro141?: PrimitiveOverrideProps<ViewProps>;
    "logo completo 2"?: PrimitiveOverrideProps<ImageProps>;
    "technology-785742_1920 2"?: PrimitiveOverrideProps<ImageProps>;
    "Lorem ipsum dolor sit aemet Lorem ipsum dolor sit metLorem ipsum dolor sit aemetLorem ipsum dolor sit"?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: Frame1Props;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Tiers?: PrimitiveOverrideProps<TextProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    "Move to the cloud, Elevate your business to the next level"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MacBookPro141Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MacBookPro141OverridesProps | undefined | null;
}>;
export default function MacBookPro141(props: MacBookPro141Props): React.ReactElement;
