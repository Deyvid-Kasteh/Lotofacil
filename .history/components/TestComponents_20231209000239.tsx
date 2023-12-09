import React, { useState } from "react";
import { View, Text } from "react-native";

const MenuTeste: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View>
      <Text>Selecione um item:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Item 1" value="item1" />
        <Picker.Item label="Item 2" value="item2" />
        <Picker.Item label="Item 3" value="item3" />
        <Picker.Item label="Item 4" value="item4" />
        <Picker.Item label="Item 5" value="item5" />
        <Picker.Item label="Item 6" value="item6" />
        <Picker.Item label="Item 7" value="item7" />
        <Picker.Item label="Item 8" value="item8" />
        <Picker.Item label="Item 9" value="item9" />
        <Picker.Item label="Item 10" value="item10" />
      </Picker>
    </View>
  );
};

export default MenuTeste;
