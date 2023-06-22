import { View, Text, StyleSheet } from 'react-native';

import Button from './Button';

const Tasks = ({ tasks, setTasks }) => (
    <View style={styles.tasks}>
        {
            tasks.map((task, index) => (
                <View style={styles.task} key={index}>
                    <Text style={[ styles.taskText, task.finish && { fontStyle: "italic", color: "#ccc", textDecorationLine: "line-through" } ]}>{task.label}</Text>
                    
                    <View style={styles.buttons}>
                        <Button title="Supprimer" onPress={() => setTasks(tasks.filter((task, i) => index !== i))} />
                        
                        { 
                            task.finish 
                                ? <Button title="Annuler" onPress={() => setTasks(tasks.map((task, i) => index === i ? { label: task.label, finish: false } : task))} />
                                : <Button title="Terminer" onPress={() => setTasks(tasks.map((task, i) => index === i ? { label: task.label, finish: true } : task))} />
                        }
                    </View>
                </View>
            ))
        }
    </View>
);

const styles = StyleSheet.create({
	tasks: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    task: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 4
    },
    taskText: {
        color: 'black',
        fontSize: 16,
        paddingLeft: 4
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export default Tasks;