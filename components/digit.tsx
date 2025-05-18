import { useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";

const { fontScale } = Dimensions.get("screen");

type DigitProps = {
  children: React.ReactNode;
  isAnswer?: boolean;
};

export default function Digit({ children, isAnswer = false }: DigitProps) {
  let fontSize = 0;
  let letters = children as string;

  if (isAnswer) {
    if (letters.length > 17) {
      fontSize = fontScale * 34;
    } else if (letters.length > 10) {
      fontSize = fontScale * 54;
    } else {
      fontSize = fontScale * 64;
    }
  } else {
    if (letters.length > 9) {
      fontSize = fontScale * 40;
    } else if (letters.length > 5) {
      fontSize = fontScale * 70;
    } else {
      fontSize = fontScale * 120;
    }
  }

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [letters]);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      style={{ flexGrow: 0, flexShrink: 1, paddingBottom: 0 }}
    >
      <Text
        style={[Styles.letter, { fontSize }]}
        numberOfLines={1}
        ellipsizeMode="clip"
      >
        {children}
      </Text>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  letter: {
    writingDirection: "rtl",
    textAlign: "right",
  },
});
