import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";


];
const MenuTeste: React.FC = ({ value, setValue }) => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <MaterialCommunityIcons
            name="clock-check-outline"
            size={20}
            color="black"
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: Cores.cor5 }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Periodo..." : "..."}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() => (
        <MaterialCommunityIcons
          style={styles.icon}
          name="calendar-clock-outline"
          size={20}
          color={Cores.cor5}
        />
      )}
      renderItem={renderItem}
    />
  );
};

export default MenuTeste;

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    width: 140,
    borderColor: Cores.cor1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: Cores.cor1,
  },
  item: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Cores.cor1,
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  textItem: { fontSize: 12 },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
