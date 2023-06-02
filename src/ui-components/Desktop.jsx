/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
import BlogDesktop from "./BlogDesktop";
export default function Desktop(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="64px"
      direction="column"
      width="1512px"
      height="982px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Desktop")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="64px"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="64px 32px 64px 32px"
        {...getOverrideProps(overrides, "Navbar")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="999999px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Logo")}
        ></View>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          {...getOverrideProps(overrides, "Links")}
        >
          <View
            width="80px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="9999px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Frame 3")}
          ></View>
          <View
            width="80px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="9999px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Frame 4")}
          ></View>
          <View
            width="80px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="9999px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Frame 5")}
          ></View>
          <View
            width="80px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="9999px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Frame 6")}
          ></View>
        </Flex>
      </Flex>
      <BlogDesktop
        display="flex"
        gap="10px"
        direction="column"
        width="1512px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 64px 10px 64px"
        {...getOverrideProps(overrides, "BlogDesktop")}
      ></BlogDesktop>
    </Flex>
  );
}
