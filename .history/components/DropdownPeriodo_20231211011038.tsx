import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const data = [
  { label: "2901 ao 3000", value: "30" },
  { label: "2801 ao 2900", value: "29" },
  { label: "2701 ao 2800", value: "28" },
  { label: "2601 ao 2700", value: "27" },
  { label: "2501 ao 2600", value: "26" },
  { label: "2401 ao 2500", value: "25" },
  { label: "2301 ao 2400", value: "24" },
  { label: "2201 ao 2300", value: "23" },
  { label: "2101 ao 2200", value: "22" },
  { label: "2001 ao 2100", value: "21" },
  { label: "1901 ao 2000", value: "20" },
  { label: "1801 ao 1900", value: "19" },
  { label: "1701 ao 1800", value: "18" },
  { label: "1601 ao 1700", value: "17" },
  { label: "1501 ao 1600", value: "16" },
  { label: "1401 ao 1500", value: "15" },
  { label: "1301 ao 1400", value: "14" },
  { label: "1201 ao 1300", value: "13" },
  { label: "1101 ao 1200", value: "12" },
  { label: "1001 ao 1100", value: "11" },
  { label: "901 ao 1000", value: "10" },
  { label: "801 ao 900", value: "9" },
  { label: "701 ao 800", value: "8" },
  { label: "601 ao 700", value: "7" },
  { label: "501 ao 600", value: "6" },
  { label: "401 ao 500", value: "5" },
  { label: "301 ao 400", value: "4" },
  { label: "201 ao 300", value: "3" },
  { label: "101 ao 200", value: "2" },
  { label: "1 ao 100", value: "1" },
];








const DropdownPeriodo: React.FC = ({ value, setValue }) => {
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
      placeholder={!isFocus ? item. : "..."}
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
export default DropdownPeriodo;

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
  textItem: { fontSize: 16 },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

