import { StyleSheet, Text, View } from "react-native";

interface CalculatorDisplayProps {
  value: string;
}

export function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <View
      accessibilityRole="text"
      accessibilityLabel={`Resultado atual: ${value}`}
      style={styles.container}
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.text}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 110,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d9e2ec",
    justifyContent: "center",
    alignItems: "flex-end",
    elevation: 3,
  },

  text: {
    width: "100%",
    color: "#172033",
    fontSize: 42,
    fontWeight: "600",
    textAlign: "right",
  },
});

