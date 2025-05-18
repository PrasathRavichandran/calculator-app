import ButtonList from "@/components/buttonList";
import Digit from "@/components/digit";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dimensions = Dimensions.get("screen");

export default function Index() {
  const { getValue: currentValue, result } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.display}>
        <Digit>{currentValue}</Digit>
        {currentValue !== "" ? <Digit isAnswer>{result}</Digit> : null}
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
    flexDirection: "column",
    justifyContent: "center",
    height: 300,
  },
});
