// import React from "react";
// import { FlatList, View, StyleSheet } from "react-native";
// import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";

// interface Jogo {
//   concurso: number;
//   DataSorteio: string;
//   Dezenas: number[];
//   Ganhadores15Acertos: number;
//   CidadeUF?: string;
//   Premio15Acertos: string;
//   Ganhadores14Acertos: number;
//   Premio14Acertos: string;
//   Ganhadores13Acertos: number;
//   Premio13Acertos: string;
//   Ganhadores12Acertos: number;
//   Premio12Acertos: string;
//   Ganhadores11Acertos: number;
//   Premio11Acertos: string;
// }

// const MenuTeste: React.FC = (periodo) => {
//   console.log(periodo)
//   const renderItem = ({ item }: { item: Jogo }) => (
//     <CardHistoricoResultadosScreen
//       concurso={item.concurso}
//       dezenas={item.Dezenas}
//       premio={item["Premio 15 Acertos"]}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={periodo}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.concurso.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 450,
//   },
// });

// export default MenuTeste;





