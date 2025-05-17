import ButtonList from "@/components/buttonList";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>1231412</Text>
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
});
