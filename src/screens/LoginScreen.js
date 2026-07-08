import { StyleSheet, View, Text } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Login Screen</Text>
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
    }

});