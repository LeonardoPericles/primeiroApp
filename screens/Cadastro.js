import React from 'react';
import { Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

function TelaCadastro ({ navigation }) {
  return (
    <View style={ styles.container}>
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

export default TelaCadastro;