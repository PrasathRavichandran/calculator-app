import ButtonList from "@/components/buttonList";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dimensions = Dimensions.get("screen");

export default function Index() {
  const { getValue: currentValue, result } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.display}>
        <Text style={Styles.heading}>{currentValue}</Text>
        {currentValue !== "" ? (
          <Text style={Styles.answer}>{result}</Text>
        ) : null}
      </View>
      <View style={Styles.keyboardLayout}>
        <ButtonList
          buttons={["AC", "code-parentheses", "percent-outline", "divide"]}
        />
        <ButtonList buttons={["7", "8", "9", "close"]} />
        <ButtonList buttons={["4", "5", "6", "minus"]} />
        <ButtonList buttons={["1", "2", "3", "plus"]} />
        <ButtonList buttons={["0", "dot-single", "backspace", "equal"]} />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  keyboardLayout: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  display: {
    marginRight: dimensions.width / 20,
    marginTop: dimensions.height / 50,
  },
  heading: {
    fontSize: dimensions.fontScale * 100,
    writingDirection: "rtl",
    textAlign: "right",
  },
  answer: {
    writingDirection: "rtl",
    textAlign: "right",
    fontSize: dimensions.fontScale * 64,
  },
});
