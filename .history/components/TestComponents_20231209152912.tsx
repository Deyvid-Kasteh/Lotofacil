import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { label: "1 ao 100", value: "1" },
  { label: "101 ao 200", value: "2" },
  { label: "201 ao 300", value: "3" },
  { label: "301 ao 400", value: "4" },
  { label: "401 ao 500", value: "5" },
  { label: "501 ao 600", value: "6" },
  { label: "601 ao 700", value: "7" },
  { label: "701 ao 800", value: "8" },
  { label: "801 ao 900", value: "8" },
  { label: "901 ao 1000", value: "8" },
  { label: "1001 ao 1100", value: "8" },
  { label: "1101 ao 1200", value: "8" },
  { label: "1201 ao 1300", value: "8" },
  { label: "1301 ao 1400", value: "8" },
  { label: "1401 ao 1500", value: "8" },
  { label: "1501 ao 1600", value: "8" },
  { label: "1601 ao 1700", value: "8" },
  { label: "1701 ao 1800", value: "8" },
  { label: "1801 ao 1900", value: "8" },
  { label: "1901 ao 2000", value: "8" },
  { label: "2001 ao 800", value: "8" },
  { label: "2101 ao 800", value: "8" },
  { label: "2201 ao 800", value: "8" },
  { label: "2301 ao 800", value: "8" },
];
const MenuTeste: React.FC = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [selectedValue, setSelectedValue] = useState("item1");

  const renderPickerItems = () => {
    const items = [];
    for (let i = 1; i <= 1500; i += 100) {
      const label = `${i} ao ${i + 99}`;
      const value = `item${i}`;
      items.push(<Picker.Item key={value} label={label} value={value} />);
    }
    return items;
  }








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
