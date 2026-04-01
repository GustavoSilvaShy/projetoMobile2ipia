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
            setLoading(true);


            setTimeout(() => {
                setLoading(false);
                Alert.alert('Sucesso', 'Logado com Sucesso !');
            }, 3000);


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
                </View>

                <Text style={style.titleInput}>Email</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <Text style={style.titleInput}>Telefone</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={telefone}
                        onChangeText={setTelefone}
                    />

                
                </View>

                <Text style={style.titleInput}>Data de nascimento</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                    />
                    

                </View>
            </View>



            <View style={style.boxBottom}>
                    <View style={style.boxBottom}>
                    <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                        {loading ? <ActivityIndicator color={'#ffff'} size={'small'} />
                            :
                            <Text style={style.textButton}>Entrar</Text>
                        }

                    </TouchableOpacity>
                    <Text style={style.textBottom}>Não tem conta? - <Text style={{ color: '#878af6', textDecorationLine: 'underline' }}>Crie Agora</Text>
                    </Text>
                </View>
            </View>
        </View>



    )

}
