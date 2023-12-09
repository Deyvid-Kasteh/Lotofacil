import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];















const MenuTeste: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("item1");

  const renderPickerItems = () => {
    const items = [];
    for (let i = 1; i <= 1500; i += 100) {
      const label = `${i} ao ${i + 99}`;
      const value = `item${i}`;
      items.push(<Picker.Item key={value} label={label} value={value} />);
    }
    return items;
  };

  return (
    <View>
      <Picker
        style={{
          backgroundColor: "yellow",
        }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {renderPickerItems()}
      </Picker>
    </View>
  );
};

export default MenuTeste;
