import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";


];
const MenuTeste: React.FC = ({ value, setValue }) => {


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
