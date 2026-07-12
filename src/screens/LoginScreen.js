import { StyleSheet, View, Text, TextInput, Pressable, Alert} from 'react-native';
import {useState} from 'react';
import { login as loginUser } from "../services/api";

export default function LoginScreen({navigation}) {
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');

    async function handleLogin() {
  if (!email.trim() || !password) {
    Alert.alert("Atenção", "Preencha o e-mail e a senha.");
    return;
  }

  try {
    const tokens = await loginUser({
      email: email.trim(),
      password,
    });

    console.log("Access token:", tokens.access);
    console.log("Refresh token:", tokens.refresh);

    Alert.alert(
      "Login realizado!",
      "Você entrou na sua conta com sucesso.",
      [
        {
          text: "Continuar",
          onPress: () => navigation.navigate("TaskList"),
        },
      ]
    );
  } catch (error) {
    const message =
      error?.detail ||
      error?.non_field_errors?.[0] ||
      "E-mail ou senha inválidos.";

    Alert.alert("Erro no login", message);
  }
}
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
                onPress={handleLogin}
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
