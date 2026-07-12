import { StyleSheet, View, Text } from 'react-native';

export default function TaskListScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>TaskListScreen</Text>
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
});