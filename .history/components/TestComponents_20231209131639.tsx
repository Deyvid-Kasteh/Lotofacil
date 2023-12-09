import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "1 ao 100", value: "1" },
  { label: "101 ao 200", value: "2" },
  { label: "201 ao 300", value: "3" },
  { label: "301 ao 400", value: "4" },
  { label: "401 a", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const MenuTeste: React.FC = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);



  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: Cores.cor5 }]}
      placeholderStyle={styles.placeholderStyle}
      // placeholder="Select item"
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      // searchPlaceholder="Search..."
      maxHeight={300}
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
      // renderLeftIcon={() => (
      //   <AntDesign
      //     style={styles.icon}
      //     color={isFocus ? "blue" : "black"}
      //     name="Safety"
      //     size={20}
      //   />
      // )}
    />
  );
};

export default MenuTeste;



const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    width: 150,
    borderColor: Cores.cor1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: Cores.cor1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
