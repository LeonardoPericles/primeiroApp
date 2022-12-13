import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon, ListItem, Avatar, Input, Header } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

function AlterarTela({ route, navigation }) {

    const [getNome, setNome] = useState([]);
    const [getTelefone, setTelefone] = useState([]);
    const [getCpf, setCpf] = useState([]);
    const [getId, setId] = useState([]);

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { cpf } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setCpf(cpf);
            setTelefone(telefone);
            setId(id);
        }
    }, [])

    function alterarDados() {

        axios.put('http://professornilson.com/testeservico/clientes/' + getId, {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
        }).then(function (response) {
            showMessage({
                message: "Registro Alterado com Sucesso",
                type: "success",
              });
        }).catch(function (error) {
            console.log(error);

        });
    }

    function excluirDados() {

        axios.delete('http://professornilson.com/testeservico/clientes/' + getId
        ).then(function (response) {
            showMessage({
                message: "Registro Excluído com Sucesso",
                type: "danger",
              });
            setNome(null);
            setCpf(null);
            setTelefone(null);
            setId(null);
        }).catch(function (error) {
            console.log(error);

        });
    }


    return (

        <View style={{ alignItems: "center" }}>
            <FlashMessage position="top" />
             <Header
                centerComponent={{ text: 'Alterar dados', style: { color: '#fff' } }}
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

            <Button title="Alterar Dados"
                buttonStyle={{ marginTop: 10, width: 200 }}
                onPress={() => alterarDados()}
            ></Button>

            <Button title="Excluir"
                buttonStyle={{ backgroundColor: 'red', marginTop: 10, width: 200 }}
                onPress={() => excluirDados()}
            ></Button>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//        alignItems: 'center',
//        justifyContent: 'center',
//        backgroundColor: 'black',
//      },
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

export default AlterarTela;