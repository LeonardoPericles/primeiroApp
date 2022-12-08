import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, alignItems: 'center', paddingTop: 50 }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OlnxO753VRgHKDLLDzCKoAHaHw%26pid%3DApi&f=1&ipt=59a1ff5d403b53e3f5467583f0314f680decd0b8e692331248a1493e330a02a7&ipo=images',
          }} />
      </View>
      <View style={{ flex: 4, margin: 20, }}>

        <Input placeholder='Login' />
        <Input placeholder='Senha' />
        <Button title="Logar" />
        <Button title="Cadastrar" />
      </View>



    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
});


export default Flex;