import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const Item = ({ name, idx }) => {
  console.log({ name, idx });

  // State
  const [number, setNumber] = useState(0);

  // Functions
  const increase = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <View style={styles.container}>
      <Feather
        name="minus-circle"
        size={40}
        color="#ff0000"
        onPress={() => decrease(idx)}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
          {name}:{" "}
        </Text>
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "200" }}>
          {number}
        </Text>
      </View>
      <Feather
        name="plus-circle"
        size={40}
        color="#fff"
        onPress={() => increase(idx)}
      />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
});
