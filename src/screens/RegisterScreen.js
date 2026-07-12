import {StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import {useState} from 'react';
import { register as registerUser } from "../services/api";

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    async function handleRegister() {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Atenção", "As senhas não coincidem.");
      return;
    }

    try {
      await registerUser({
        email: email.trim(),
        password,
        password_confirm: confirmPassword,
      });

      Alert.alert(
        "Conta criada!",
        "Seu cadastro foi realizado com sucesso.",
        [
          {
            text: "Entrar",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } catch (error) {
      const message =
        error?.email?.[0] ||
        error?.password?.[0] ||
        error?.password_confirm?.[0] ||
        error?.detail ||
        "Não foi possível criar a conta.";

      Alert.alert("Erro no cadastro", message);
    }
  }
    
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
                onPress= {handleRegister}
            >
            <Text style={styles.textobotao}>Criar Conta</Text>
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