/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { BlogDesktopProps } from "./BlogDesktop";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DesktopOverridesProps = {
    Desktop?: PrimitiveOverrideProps<FlexProps>;
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    Links?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 5"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 6"?: PrimitiveOverrideProps<ViewProps>;
    BlogDesktop?: BlogDesktopProps;
} & EscapeHatchProps;
export declare type DesktopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DesktopOverridesProps | undefined | null;
}>;
export default function Desktop(props: DesktopProps): React.ReactElement;
