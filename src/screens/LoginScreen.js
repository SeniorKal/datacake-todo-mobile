import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import {useState} from 'react';

export default function LoginScreen() {
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>
            <TextInput
                style={styles.Input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.Input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable
                style={styles.botao} 
                onPress={() => { 
                if (email === ""|| password === ""){
                        alert ('Preencha todos os campos');
                        return;
                    }
                alert('login realizado!');
            }}
            >
                <Text style={styles.textoBotao}>Entrar</Text>
            </Pressable>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(40, 42, 54)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#e4e4e4',
        fontSize: 20,
        marginBottom: 10,
    },
    Input: {
        marginBottom: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },
    botao: {
        width: '60%',
        backgroundColor: '#11c069',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center', 
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
