import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ButtonProps = {
  icon?: { type: "fta6" | "eto" | "mci"; name: string };
  label?: string;
  isLast: boolean;
};

const cloud = "#E0E0E0";
const teal = "#B0BEC5";
const green = "#16A085";

const dimensions = Dimensions.get("screen");
const margin = 20;
const noOfButtons = 4;
const totalMargin = margin * (noOfButtons - 1);
const RADIUS = (dimensions.width - totalMargin) / noOfButtons;

const baseFontSize = 30;
const SCALEDFONTSIZE = baseFontSize * dimensions.fontScale;

export default function Button({ icon, label, isLast }: ButtonProps) {
  let content = null;
  switch (icon?.type) {
    case "fta6":
      content = (
        <FontAwesome6 name={icon.name} size={SCALEDFONTSIZE} color={"black"} />
      );
      break;
    case "eto":
      content = (
        <Entypo name={icon.name as any} size={SCALEDFONTSIZE} color={"black"} />
      );
      break;
    case "mci":
      content = (
        <MaterialCommunityIcons
          name={icon.name as any}
          size={SCALEDFONTSIZE}
          color={"black"}
        />
      );
      break;
    default:
      content = <Text style={Styles.buttonText}>{label}</Text>;
  }

  return (
    <TouchableOpacity
      style={[Styles.button, { backgroundColor: isLast ? teal : cloud }]}
    >
      {content}
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    width: RADIUS,
    height: RADIUS,
    borderRadius: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: SCALEDFONTSIZE,
    fontWeight: "400",
  },
});
