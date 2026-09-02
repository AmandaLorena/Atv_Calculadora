import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CalculatorButton } from "../components/CalculatorButton";
import { CalculatorDisplay } from "../components/CalculatorDisplay";
import {
  calculateExpression,
  calculateSquareRoot,
  canAddDecimal,
  canAddOperator,
  getLastCharacter,
  isOperator,
  type Operator,
} from "../utils/calculator";
import { formatResult } from "../utils/formatter";

const NUMBER_BUTTONS = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
];

const OPERATOR_BUTTONS: Operator[] = ["*", "-", "+"];

export default function App() {
  const [display, setDisplay] = useState("0");
  const [hasResult, setHasResult] = useState(false);

  function handleNumber(number: string) {
    if (display === "Erro" || hasResult) {
      setDisplay(number);
      setHasResult(false);
      return;
    }

    if (display === "0") {
      setDisplay(number);
      return;
    }

    setDisplay((current) => `${current}${number}`);
  }

  function handleOperator(operator: Operator) {
    if (display === "Erro") {
      return;
    }

    if (!canAddOperator(display)) {
      return;
    }

    setDisplay((current) => `${current}${operator}`);
    setHasResult(false);
  }

  function handleDecimal() {
    if (display === "Erro") {
      setDisplay("0.");
      return;
    }

    if (hasResult) {
      setDisplay("0.");
      setHasResult(false);
      return;
    }

    if (!canAddDecimal(display)) {
      return;
    }

    if (isOperator(getLastCharacter(display))) {
      setDisplay((current) => `${current}0.`);
      return;
    }

    setDisplay((current) => `${current}.`);
  }

  function handleClear() {
    setDisplay("0");
    setHasResult(false);
  }

  function handleBackspace() {
    if (display === "Erro" || hasResult) {
      handleClear();
      return;
    }

    setDisplay((current) => {
      const nextValue = current.slice(0, -1);

      return nextValue || "0";
    });
  }

  function handleSquareRoot() {
    if (display === "Erro") {
      return;
    }

    const result = calculateSquareRoot(display);

    if (result === null) {
      setDisplay("Erro");
      setHasResult(true);
      return;
    }

    setDisplay(formatResult(result));
    setHasResult(true);
  }

  function handleEquals() {
    if (display === "Erro") {
      return;
    }

    const lastCharacter = getLastCharacter(display);

    if (isOperator(lastCharacter) || lastCharacter === ".") {
      return;
    }

    const result = calculateExpression(display);

    if (result === null) {
      setDisplay("Erro");
      setHasResult(true);
      return;
    }

    setDisplay(formatResult(result));
    setHasResult(true);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora</Text>
          <Text style={styles.subtitle}>
            Operações matemáticas simples
          </Text>
        </View>

        <CalculatorDisplay value={display} />

        <View style={styles.keyboard}>
          <View style={styles.row}>
            <CalculatorButton
              label="AC"
              onPress={handleClear}
              variant="action"
              wide
            />

            <CalculatorButton
              label="⌫"
              onPress={handleBackspace}
              variant="action"
            />

            <CalculatorButton
              label="√"
              onPress={handleSquareRoot}
              variant="operator"
            />
          </View>

          {NUMBER_BUTTONS.map((row) => (
            <View key={row.join("")} style={styles.row}>
              {row.map((number) => (
                <CalculatorButton
                  key={number}
                  label={number}
                  onPress={() => handleNumber(number)}
                />
              ))}

              <CalculatorButton
                label={OPERATOR_BUTTONS[NUMBER_BUTTONS.indexOf(row)]}
                onPress={() =>
                  handleOperator(
                    OPERATOR_BUTTONS[NUMBER_BUTTONS.indexOf(row)]
                  )
                }
                variant="operator"
              />
            </View>
          ))}

          <View style={styles.row}>
            <CalculatorButton
              label="0"
              onPress={() => handleNumber("0")}
              wide
            />

            <CalculatorButton
              label="."
              onPress={handleDecimal}
            />

            <CalculatorButton
              label="="
              onPress={handleEquals}
              variant="operator"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#b5d5f6",
  },

  container: {
    flex: 1,
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 12,
  },

  header: {
    marginBottom: 16,
  },

  title: {
    color: "#172033",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 4,
    color: "#52627a",
    fontSize: 14,
    textAlign: "center",
  },

  keyboard: {
    width: "100%",
    alignItems: "center",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
});
