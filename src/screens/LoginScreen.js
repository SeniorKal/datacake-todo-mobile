import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Login Screen</Text>
            <TextInput
                style={styles.Input}
                placeholder="Email"
            />
            <TextInput
                style={styles.Input}
                placeholder="Password"
                secureTextEntry
            />
            <Pressable
                style={styles.botao}>
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
    }

});