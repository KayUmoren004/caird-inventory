import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Item from "./Item";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [items, setItems] = useState([]);
  const [itemNames, setItemNames] = useState([]);
  const [itemNumbers, setItemNumbers] = useState([]);

  // Remove this state
  // const [set, setSet] = useState(false);

  console.log({
    numberOfItems,
    items,
    // itemNames,
    // itemNumbers,
  });

  const promptForInput = () => {
    Alert.prompt("Item Name", "Enter the name of the item", (text) => {
      // Check if the text is not empty before setting the item name
      if (text.trim() !== "") {
        // Increment the number of items and add an item only if the name is set
        setNumberOfItems(numberOfItems + 1);
        const newItem = { name: text, number: 0 };
        // setItemNumbers([...itemNumbers, newItem]);
        setItems([
          ...items,
          <Item idx={numberOfItems} name={text} key={numberOfItems} />,
        ]);
        // setItemNames([...itemNames, text]);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>{items}</View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 36,
          }}
        >
          <Feather
            name="plus"
            size={50}
            color="#800080"
            onPress={() => {
              promptForInput();
            }}
          />

          <Feather
            name="minus"
            size={50}
            color="#800080"
            onPress={() => {
              // Decrement the number of items and remove the last item only if there are items
              if (numberOfItems > 0) {
                setNumberOfItems(numberOfItems - 1);
                setItems(items.slice(0, -1));
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
