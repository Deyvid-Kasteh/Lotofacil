

import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
