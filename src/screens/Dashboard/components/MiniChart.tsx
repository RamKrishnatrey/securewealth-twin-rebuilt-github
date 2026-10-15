import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MiniChart() {
  return (
    <Svg
      width="100%"
      height={70}
      viewBox="0 0 300 70"
      style={{ marginTop: 24 }}
    >
      <Path
        d="M0 60
           C40 45
           60 30
           90 36
           C120 44
           150 20
           180 24
           C210 28
           240 8
           300 16"
        stroke="#FFFFFF"
        strokeWidth={4}
        fill="none"
      />
    </Svg>
  );
}