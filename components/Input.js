import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, currentTask, setCurrentTask }) => (
    <TextInput 
        style={styles.input}
        onChangeText={setCurrentTask}
        value={currentTask}
        placeholder={placeholder}
        placeholderTextColor="gray"
    />
);

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        margin: 8,
        padding: 8,
        borderRadius: 4
	}
});

export default Input;