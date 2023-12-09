import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
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
  { label: "801 ao 900", value: "9" },
  { label: "901 ao 1000", value: "10" },
  { label: "1001 ao 1100", value: "11" },
  { label: "1101 ao 1200", value: "12" },
  { label: "1201 ao 1300", value: "13" },
  { label: "1301 ao 1400", value: "14" },
  { label: "1401 ao 1500", value: "15" },
  { label: "1501 ao 1600", value: "16" },
  { label: "1601 ao 1700", value: "17" },
  { label: "1701 ao 1800", value: "18" },
  { label: "1801 ao 1900", value: "19" },
  { label: "1901 ao 2000", value: "20" },
  { label: "2001 ao 2100", value: "21" },
  { label: "2101 ao 2200", value: "22" },
  { label: "2201 ao 2300", value: "23" },
  { label: "2301 ao 2400", value: "24" },
  { label: "2401 ao 2500", value: "25" },
  { label: "2501 ao 2600", value: "26" },
  { label: "2601 ao 2700", value: "27" },
  { label: "2701 ao 2800", value: "28" },
  { label: "2801 ao 2900", value: "29" },
  { label: "2901 ao 3000", value: "30" },
];







const DropdownPeriodo = () => {
  return (
    <View>
      <Text>DropdownPeriodo</Text>
    </View>
  );
};

export default DropdownPeriodo;
