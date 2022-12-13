import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon, ListItem, Avatar, Input, Header } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

function InserirTela({ route, navigation }) {

    const [getNome, setNome] = useState([]);
    const [getTelefone, setTelefone] = useState([]);
    const [getCpf, setCpf] = useState([]);

        async function inserirDados() {
            await axios.post('http://professornilson.com/testeservico/clientes', {
                    nome: getNome,
                    telefone: getTelefone,
                    cpf: getCpf
                }).then(function (response) {
                    showMessage({
                        message: "Registro Salvo com Sucesso",
                        type: "success",
                      });
                }).catch(function (error) {
                    console.log(error);

                });
        }
    


    return (

        <View style={{ alignItems: "center" }}>
            
            <Header
                centerComponent={{ text: 'Inserir dados', style: { color: '#fff' } }}
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('Tela de Listar')}
                />}
            />

            <Text>Digite seu Nome</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />
            <Text>Digite seu telefone</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
            />
            <Text>Digite seu CPF</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />

            <Button title="Salvar Dados"
                buttonStyle={{ marginTop: 10, width: 200 }}
                onPress={()=> inserirDados()}
            ></Button>
            <FlashMessage position="top" />
        </View>


    );
};

// const styles = StyleSheet.create({
//     container: {
//            flex: 1,
//            alignItems: 'center',
//            justifyContent: 'center',
//            backgroundColor: 'black',
//     },
//      paddingAll: {
//        padding: '5px',
//      },
//      avatar: {
//        alignSelf: 'center',
//        marginBottom: '40px',

//      },
//      button: {
//        backgroundColor: 'red',

//      },
//      input: {
//        color: 'white',
//      },
// });

export default InserirTela;