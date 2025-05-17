import { iconMap } from "@/constants/iconMap";
import { StyleSheet, View } from "react-native";
import Button from "./button";

type ButtonListProps = {
  buttons: string[];
};

export default function ButtonList({ buttons }: ButtonListProps) {
  return (
    <View style={Styles.row}>
      {buttons.map((item, index, arr) => {
        if (item === "AC") {
          return <Button key={item + index} isLast label={item} />;
        }
        const iconInfo = iconMap[item];
        return (
          <Button
            key={item + index}
            isLast={index === arr.length - 1}
            icon={iconInfo}
          />
        );
      })}
    </View>
  );
}

const Styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    maxWidth: "100%",
    gap: 5,
    marginBottom: 10,
  },
});
