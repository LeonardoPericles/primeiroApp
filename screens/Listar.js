import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon, ListItem, Avatar, Input, Header } from 'react-native-elements';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

function ListarTela({ route, navigation }) {

    const [list, setList] = useState([]);
    const refresh = useIsFocused();

    useEffect(() => {
        function consultarDados() {
            axios.get('http://professornilson.com/testeservico/clientes')

                .then(function (response) {
                    setList(response.data);
                }).catch(function (error) {
                    console.log(error);

                });
        }
        consultarDados();
    }, [refresh])


    return (

        <View>

            <Header
                centerComponent={{ text: 'Lista', style: { color: '#fff' } }}
                rightComponent={<Button
                    title="+"
                    onPress={() => navigation.navigate('Tela de Inserir')}
                />}
            />

            <ScrollView>
                {
                    list.map((linha, indice) => (
                        <ListItem key={indice} bottomDivider  onPress={() => navigation.navigate('Tela de Alterar',
                        {
                            nome:  linha.nome,
                            telefone: linha.telefone,
                            cpf: linha.cpf,
                            id: linha.id
                        }
                        )}>
                            <Avatar source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OlnxO753VRgHKDLLDzCKoAHaHw%26pid%3DApi&f=1&ipt=59a1ff5d403b53e3f5467583f0314f680decd0b8e692331248a1493e330a02a7&ipo=images' }} />
                            <ListItem.Content>
                                <ListItem.Title>{linha.nome}</ListItem.Title>
                                <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   backgroundColor: 'black',
    },
    // paddingAll: {
    //   padding: '5px',
    // },
    // avatar: {
    //   alignSelf: 'center',
    //   marginBottom: '40px',

    // },
    // button: {
    //   backgroundColor: 'red',

    // },
    // input: {
    //   color: 'white',
    // },
});

export default ListarTela;