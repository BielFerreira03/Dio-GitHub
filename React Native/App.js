// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// // const app = () =>{}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Gabriel Ferreira</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
// import Torch from "react-native-Torch";
// import RNShake from 'react-native-shake';

const App = ()=>{
  const [toggle, setToggle] = useState(false);
  
  const handleChangeToggle = ()=>setToggle((oldToggle) => !oldToggle);

  // useEffect(()=>{
  //   // LIGA FLASH DO CELULAR
  //   Torch.switchState(toggle);
  // }, [toggle]);

  // useEffect(()=>{
  //   // quando o celular for chacoalhado, mudaremos o toggle
    
  //   const subscription = RNShake.addListener(() => {
  //     setToggle((oldToggle) => !oldToggle);
  //   });
  //   // ESSA FUNÇÃO VAI SER CHAMADA QUANDO O COMPONENTE FOR SER DESMONTADO
  //   return () => subscription.remove();

  // }, []);


  return <View style={toggle ? style.branco :style.container}>
    <TouchableOpacity onPress={handleChangeToggle}> 

      <Image style={toggle ? style.lightingOn : style.lightingOff} 
        source={
        toggle 
          ? require("./assets/icons/eco-light.png") 
          : require("./assets/icons/eco-light-off.png")} >

      </Image>

      <Image style={style.dioLogo} 
        source={
        toggle 
          ? require("./assets/icons/logo-dio.png") 
          : require("./assets/icons/logo-dio-white.png")} >
        
      </Image>

    </TouchableOpacity>
  </View>;
  // return <View style={style.container} />;

};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  branco: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    // tintColor: 'white',
    width: 250,
    height: 250,
  },

});