import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const PrimaryButton = ({ title, onPress, fullSize }) => (
    <TouchableOpacity
        style={[ styles.button, fullSize && { width: '100%' }]}
        onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
        alignItems: 'center',
        margin: 4,
        padding: 8,
        borderRadius: 4,
        backgroundColor: "#2196F3",
        minWidth: 80
	},
    text: {
        color: '#fff',
        fontSize: 16
    }
});

export default PrimaryButton;