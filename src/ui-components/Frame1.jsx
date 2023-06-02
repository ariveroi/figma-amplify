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
import { Flex } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { frame1, overrides, ...rest } = props;
  const frameOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://google.es",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.07000000029802322)"
      borderRadius="5px"
      padding="11px 24px 11px 24px"
      backgroundColor="rgba(37,109,123,1)"
      children={frame1}
      onClick={() => {
        frameOneOnClick();
      }}
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    ></Flex>
  );
}
