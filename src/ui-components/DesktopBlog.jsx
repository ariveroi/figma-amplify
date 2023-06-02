/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function DesktopBlog(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="55px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="16px 160px 16px 160px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DesktopBlog")}
      {...rest}
    >
      <Flex
        gap="55px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
          lineHeight="77.45454406738281px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="360px"
          height="72px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Blogs"
          {...getOverrideProps(overrides, "My Blogs")}
        ></Text>
        <View
          width="unset"
          height="691px"
          {...getOverrideProps(overrides, "Blog11065")}
        ></View>
        <View
          width="1143px"
          height="691px"
          {...getOverrideProps(overrides, "Blog11071")}
        ></View>
        <View
          width="1143px"
          height="691px"
          {...getOverrideProps(overrides, "Blog11077")}
        ></View>
      </Flex>
    </Flex>
  );
}
