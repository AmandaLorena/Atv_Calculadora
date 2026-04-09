import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (num: string) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperator = (operator: string) => {
    const lastChar = display[display.length - 1];

    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "*" &&
      lastChar !== "/" &&
      display !== "0"
    ) {
      setDisplay(display + operator);
    }
  };

  const handleDot = () => {
    if (display.includes("+")) {
      const partes = display.split("+");
      if (!partes[1].includes(".")) {
        setDisplay(display + ".");
      }
    } else if (display.includes("-")) {
      const partes = display.split("-");
      if (!partes[1].includes(".")) {
        setDisplay(display + ".");
      }
    } else if (display.includes("*")) {
      const partes = display.split("*");
      if (!partes[1].includes(".")) {
        setDisplay(display + ".");
      }
    } else if (display.includes("/")) {
      const partes = display.split("/");
      if (!partes[1].includes(".")) {
        setDisplay(display + ".");
      }
    } else {
      if (!display.includes(".")) {
        setDisplay(display + ".");
      }
    }
  };

  const handleSqrt = () => {
    const num = parseFloat(display);

    if (num >= 0) {
      const resultado = Math.sqrt(num);
      setDisplay(resultado.toString());
    }
  };

  const handleEquals = () => {
    if (
      display.endsWith("+") ||
      display.endsWith("-") ||
      display.endsWith("*") ||
      display.endsWith("/")
    ) {
      return;
    }

    if (display.includes("+")) {
      const partes = display.split("+");
      const num1 = parseFloat(partes[0]);
      const num2 = parseFloat(partes[1]);
      const resultado = num1 + num2;
      setDisplay(resultado.toString());
    } else if (display.includes("-")) {
      const partes = display.split("-");
      const num1 = parseFloat(partes[0]);
      const num2 = parseFloat(partes[1]);
      const resultado = num1 - num2;
      setDisplay(resultado.toString());
    } else if (display.includes("*")) {
      const partes = display.split("*");
      const num1 = parseFloat(partes[0]);
      const num2 = parseFloat(partes[1]);
      const resultado = num1 * num2;
      setDisplay(resultado.toString());
    } else if (display.includes("/")) {
      const partes = display.split("/");
      const num1 = parseFloat(partes[0]);
      const num2 = parseFloat(partes[1]);

      if (num2 === 0) {
        setDisplay("Erro");
      } else {
        const resultado = num1 / num2;
        setDisplay(resultado.toString());
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayBox}>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.largeButton]}
          onPress={() => setDisplay("0")}
        >
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSqrt}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber("7")}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber("4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber("1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumber("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.largeButton]}
          onPress={() => handleNumber("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDot}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEquals}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5d5f6",
    paddingTop: 40,
    alignItems: "center",
  },
  displayBox: {
    width: 320,
    height: 80,
    backgroundColor: "#fdffff",
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  display: {
    fontSize: 35,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 8,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  largeButton: {
    width: 140,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 25,
  },
});