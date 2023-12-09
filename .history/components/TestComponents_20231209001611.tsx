// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import { Picker } from "@react-native-picker/picker";

// const MenuTeste: React.FC = () => {
//   const [selectedValue, setSelectedValue] = useState("");

//   return (
//     <View>
//       <Text>Selecione um item:</Text>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="Item 1" value="item1" />
//         <Picker.Item label="Item 2" value="item2" />
//         <Picker.Item label="Item 3" value="item3" />
//         <Picker.Item label="Item 4" value="item4" />
//         <Picker.Item label="Item 5" value="item5" />
//         <Picker.Item label="Item 6" value="item6" />
//         <Picker.Item label="Item 7" value="item7" />
//         <Picker.Item label="Item 8" value="item8" />
//         <Picker.Item label="Item 9" value="item9" />
//         <Picker.Item label="Item 10" value="item10" />
//       </Picker>
//     </View>
//   );
// };

// export default MenuTeste;






import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";





const MenuItems: Array<MenuItem> = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
  { label: "Opção 3", value: "3" },
  { label: "Opção 4", value: "4" },
  { label: "Opção 5", value: "5" },
  { label: "Opção 6", value: "6" },
  { label: "Opção 7", value: "7" },
  { label: "Opção 8", value: "8" },
  { label: "Opção 9", value: "9" },
  { label: "Opção 10", value: "10" },
];

const MenuTeste: React.FC = ({ value = "1" }) => {
  const [selectedValue, setSelectedValue] = useState("item1");

  const <link>renderPickerItems</link> = () => {
    const items = [];
    for (let i = 1; i <= 1500; i += 100) {
      const label = `${i} ao ${i + 99}`;
      const value = `item${i}`;
      items.push(<Picker.Item key={value} label={label} value={value} />);
    }
    return items;
  }

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
        {<link>renderPickerItems</link>()}
      </Picker>
    </View>
  );
}


export default MenuTeste;









