import React from "react";
import { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,

} from 'react-native';

import { style } from "./styles";

export default function Login() {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !telefone || !nome || !dataNascimento) {
                return Alert.alert('Atenção', 'Digite os campos obrigatórios');
            }

        } catch (error) {
            Alert.alert('Erro', 'Erro ao Logar');
        }

    }
    return (
        <View style={style.container}>

            <View style={style.boxTop}>
                <Text style={style.text}>Cadastro de Clientes</Text>


            </View>

            <View style={style.boxMid}>

                <Text style={style.titleInput}>Nome</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={nome}
                        onChangeText={setNome}
                    />


                    <Text style={style.titleInput}>Email</Text>
                    <View style={style.boxInput}>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>



                </View>
            </View>


            <View style={style.boxBottom}>


            </View>



        </View>



    )

}
