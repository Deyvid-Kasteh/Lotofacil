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
        placeholder="Escoha um intervalo"
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
