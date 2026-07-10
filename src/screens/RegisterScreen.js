import {StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import {useState} from 'react';

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Register</Text>
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
            <TextInput
                style={styles.Input}
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />         
            <Pressable
                style={styles.botao} 
                onPress={() => { 
                if (email === ""|| password === ""|| confirmPassword ===""){
                    alert ('Preencha todos os campos');
                    return;
                }
                if (password !== confirmPassword){
                    alert('As senhas não coincidem')
                    return;
                }
                alert('Cadastro realizado!');
            }}
            >
            <Text style={styles.textobotao}>registrar</Text>
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