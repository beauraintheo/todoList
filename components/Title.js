import { StyleSheet, Text } from "react-native";

const Title = ({ title }) => (
    <Text style={styles.title}>
        {title}
    </Text>
);

const styles = StyleSheet.create({
	title: {
		backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16
	}
});

export default Title;