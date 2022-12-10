import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon, Avatar, Input } from 'react-native-elements';


function TelaLogin ({navigation}) {
  return (
    <View style={[styles.container, {
  
    }]}>
      <View>
        <Avatar
         containerStyle={styles.avatar}
          size="xlarge"
          rounded
          source={{
            uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OlnxO753VRgHKDLLDzCKoAHaHw%26pid%3DApi&f=1&ipt=59a1ff5d403b53e3f5467583f0314f680decd0b8e692331248a1493e330a02a7&ipo=images',
          }} />
      </View>

      <View >
       
        <Input 
         label={'Login'}
         style={[styles.input]}
         placeholder="Digite seu login"
          />
        <Input 
         label={'Senha'}
         style={[styles.input]}
         placeholder="Digite sua senha"
         />
        <Button 
        title="Logar"
        style={styles.paddingAll} />
        <Button 
        title="Criar conta"
        onPress={()=> navigation.navigate('Tela de Cadastro')}
        buttonStyle={styles.button}
        style={styles.paddingAll}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  paddingAll: {
    padding: '5px',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: '40px',
   
  },
  button: {
    backgroundColor: 'red',
    
  },
  input: {
    color: 'white',
  },
});

export default TelaLogin;

//acho que preciso exportar 