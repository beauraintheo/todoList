import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import Tasks from './components/Tasks';

const App = () => {
	const [ currentTask, setCurrentTask ] = useState('');
	const [ tasks, setTasks ] = useState([]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Title title="Liste des tâches" />
				<Input
					placeholder="Ajouter une tâche"
					currentTask={currentTask}
					setCurrentTask={setCurrentTask}
				/>
				<Button
					title="Ajouter"
					fullSize={true}
					onPress={() => {
						setTasks([ ...tasks, { label: currentTask, finish: false } ].filter(Boolean));
						setCurrentTask('');
					}}
				/>
			</View>

			<View style={styles.content}>
				<Tasks tasks={tasks} setTasks={setTasks} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
		height: '100%',
		padding: 32,
		boxSizng: 'border-box'
	},
	header: {
		width: '100%',
		alignItems: "center"
	},
	content: {
		width: '100%',
		alignItems: "center"
	}
});

export default App;
