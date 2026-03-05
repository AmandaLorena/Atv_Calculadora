import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("0");
 
  return (

    <View style={styles.container}>

      <View style={styles.displayBox}>
        <Text style={styles.display}>{display}</Text>
      </View>

        <View style={styles.row}>

        <TouchableOpacity style={[styles.button, styles.largeButton]} onPress={() => setDisplay("0")}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "√")}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "/")}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "7")}> 
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "*")}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "-")}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "+")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={[styles.button, styles.largeButton]} onPress={() => setDisplay(display + "0")}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + ".")}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + "=")}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#b5d5f6", paddingTop: 40, alignItems: "center" },
  displayBox: {width: 320,height: 80, backgroundColor: "#fdffff", borderWidth: 1,
  justifyContent: "center",paddingHorizontal: 15},
  display: { fontSize: 35, textAlign: "right" },
  row: { flexDirection: "row", justifyContent: "center", gap: 10, marginVertical: 8 },
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },

  largeButton: { width: 140, marginHorizontal: 10 },
  buttonText: { fontSize: 25 }
});



