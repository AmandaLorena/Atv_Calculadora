import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  variant?: "number" | "operator" | "action";
  wide?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CalculatorButton({
  label,
  onPress,
  variant = "number",
  wide = false,
  disabled = false,
  style,
}: CalculatorButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`Botão ${label}`}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        wide && styles.wideButton,
        variant === "operator" && styles.operatorButton,
        variant === "action" && styles.actionButton,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "operator" && styles.operatorText,
          variant === "action" && styles.actionText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 64,
    margin: 5,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d9e2ec",
    elevation: 2,
  },

  wideButton: {
    width: 150,
  },

  operatorButton: {
    backgroundColor: "#4d8dff",
    borderColor: "#4d8dff",
  },

  actionButton: {
    backgroundColor: "#e9eef5",
  },

  disabledButton: {
    opacity: 0.5,
  },

  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#1f2937",
  },

  operatorText: {
    color: "#ffffff",
    fontWeight: "700",
  },

  actionText: {
    color: "#334155",
    fontWeight: "700",
  },
});
