import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Data Cake</Text>

      <Text style={styles.texto1}>Bem-Vindo!</Text>

      <Pressable style={styles.botao} onPress={() => alert('Entrar')}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario} onPress={() => alert('Criar conta')}>
        <Text style={styles.textoBotao}>Criar Conta</Text>
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
  padding: 24,
},
  titulo: {
  fontSize: 28,
  color: '#e4e4e4',
  fontWeight: 'bold',
  marginBottom: 16,
},  
texto1: {
  fontSize: 20,
  color: '#e4e4e4',
  marginBottom: 32,
},
  botao: {
  width: '100%',
  backgroundColor: '#007bff',
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 12,
},
  botaoSecundario: {
  width: '100%',
  backgroundColor: '#28a745',
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
},
  textoBotao: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
}
});
