/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BlogPost(props) {
  const { blogPost, user, overrides, ...rest } = props;
  const authorOnClick = useNavigateAction({
    type: "url",
    url: `${"/"}${blogPost?.userID}`,
  });
  return (
    <View
      width="1512px"
      height="1506px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BlogPost")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="48.409088134765625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="131px"
        left="103px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={blogPost?.title}
        {...getOverrideProps(overrides, "This is the blog title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="204px"
        left="103px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={blogPost?.subtitle}
        {...getOverrideProps(overrides, "This is the blog subtitle")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="756px"
        height="487px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="304px"
        left="669px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={blogPost?.content}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ..."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="82px"
        left="103px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.name}
        onClick={() => {
          authorOnClick();
        }}
        {...getOverrideProps(overrides, "Author")}
      ></Text>
      <Image
        width="29.5%"
        height="25.3%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22.24%"
        bottom="52.46%"
        left="7.8%"
        right="62.7%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={blogPost?.image}
        {...getOverrideProps(overrides, "technology-785742_1920 3")}
      ></Image>
    </View>
  );
}
