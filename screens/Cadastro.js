import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon, Avatar, Input } from 'react-native-elements';

function TelaCadastro ({ navigation, route }) {
  

  return (
    <View style={styles.container}>
      <View>
        
        <Input label={'Email'}
          style={styles.input}
        />
        <Input label={'Senha'}
          style={styles.input}
        />
        <Button
          title={'Salvar'}
          onPress={() => navigation.navigate('Tela de Login')}
        />
  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: '5px',
  },
  paddingAll: {
    padding: '5px',
  },
  button: {
    backgroundColor: 'red',
  },
  input: {
    color: 'white',
  },
});

export default  TelaCadastro;