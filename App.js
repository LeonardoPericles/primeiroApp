import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const Flex = () => {
  return (
    <View style={[styles.container, {
  
    }]}>
      <View style={{ flex: 2, alignItems: 'center',}}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OlnxO753VRgHKDLLDzCKoAHaHw%26pid%3DApi&f=1&ipt=59a1ff5d403b53e3f5467583f0314f680decd0b8e692331248a1493e330a02a7&ipo=images',
          }} />
      </View>

      <View style={{ flex: 5, margin: 20, }}>
       
        <Input 
         label={'Login'}
         style={styles.paddingInput}
         placeholder="Digite seu login"/>

        <Input 
         label={'Senha'}
         style={styles.paddingInput}
         placeholder="Digite sua senha" />

        <Button 
        title="Logar"
        style={styles.paddingInput} />

        <Button 
        title={'Criar conta'}
        style={styles.paddingInput}
        type={'outline'}
        titleStyle={{ color: 'red'}} />

      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '100px' ,
    backgroundColor: 'black',
  },
  paddingInput: {
    padding: '10px',
  },
});


export default Flex;