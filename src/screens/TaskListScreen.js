import { StyleSheet, Modal, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import * as SecureStore from "expo-secure-store";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

export default function TaskListScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [sortOrder, setSortOrder] = useState("recent");

    async function loadTasks() {
        try {
            const acessToken = await SecureStore.getItemAsync("accessToken");
            const data = await getTasks(acessToken);
            setTasks(data);
        }
        catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        }
    }

    async function handleAddTask() {
        const title = newTask.trim();
        if (!title) {
            return;
        }
        try {
            const accessToken = await SecureStore.getItemAsync("accessToken");
            await createTask(accessToken, { title });
            await loadTasks();
            setNewTask("");
        } catch (error) {
            console.error('Error creating task remotely:', error);
        }
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "pending") {
            return !task.completed;
        }

        if (filter === "completed") {
            return task.completed;
        }

        return true;
    });

    const sortedTasks = [...filteredTasks].sort((taskA, taskB) => {
        const dateA = new Date(taskA.created_at).getTime();
        const dateB = new Date(taskB.created_at).getTime();

        if (sortOrder === "oldest") {
            return dateA - dateB;
        }

        return dateB - dateA;
    });

    async function handleToggleTask(task) {
        try {
            const accessToken =
                await SecureStore.getItemAsync("accessToken");

            await updateTask(accessToken, task.id, {
                completed: !task.completed,
            });

            await loadTasks();
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
        }
    }

    async function handleDeleteTask(taskId) {
        try {
            const accessToken =
                await SecureStore.getItemAsync("accessToken");

            await deleteTask(accessToken, taskId);

            await loadTasks();
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
        }
    }

    function handleOpenEditModal(task) {
        setEditingTask(task);
        setEditedTitle(task.title);
        setEditModalVisible(true);
    }

    async function handleSaveEdit() {
        const title = editedTitle.trim();

        if (!title || !editingTask) {
            return;
        }

        try {
            const accessToken =
                await SecureStore.getItemAsync("accessToken");

            await updateTask(accessToken, editingTask.id, {
                title,
            });

            await loadTasks();

            setEditModalVisible(false);
            setEditingTask(null);
            setEditedTitle("");
        } catch (error) {
            console.error("Erro ao editar tarefa:", error);
        }
    }


    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Minhas Tarefas</Text>
            <Text style={styles.texto2}>Filtro:</Text>

            <View style={styles.botoesContainer}>
                <Pressable style={styles.botao} onPress={() => setFilter("all")}>
                    <Text style={styles.textoBotao}>Todas</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={() => setFilter("pending")}>
                    <Text style={styles.textoBotao}>Pendentes</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={() => setFilter("completed")}>
                    <Text style={styles.textoBotao}>Concluídas</Text>
                </Pressable>
            </View>
            <Text style={styles.texto2}>Tarefas:</Text>

            <View style={styles.botoesContainer}>
                <TextInput
                    style={styles.Input}
                    placeholder="Digite uma nova tarefa..."
                    value={newTask}
                    onChangeText={setNewTask}
                />
                <Pressable style={styles.botao} onPress={handleAddTask}>
                    <Text style={styles.textoBotao}>Adicionar</Text>
                </Pressable>
            </View>
            <Text style={styles.sectionTitle}>Ordenação:</Text>
            <View style={styles.sortContainer}>
                <Pressable
                    style={[
                        styles.sortButton,
                        sortOrder === "recent" && styles.selectedButton,
                    ]}
                    onPress={() => setSortOrder("recent")}
                >
                    <Text style={styles.buttonText}>Mais recentes</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.sortButton,
                        sortOrder === "oldest" && styles.selectedButton,
                    ]}
                    onPress={() => setSortOrder("oldest")}
                >
                    <Text style={styles.buttonText}>Mais antigas</Text>
                </Pressable>
            </View>
            <Text style={styles.texto2}>Lista:</Text>
            <FlatList
                style={styles.list}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>
                        Nenhuma tarefa encontrada.
                    </Text>
                }
                data={sortedTasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Pressable style={styles.taskContent} onPress={() => handleToggleTask(item)}>
                            <Text style={[styles.taskTitle, item.completed && styles.taskCompleted,]}>
                                {item.completed ? "✓ " : "○ "}
                                {item.title}
                            </Text>

                            <Text style={styles.taskDate}>
                                Criada em:{" "}
                                {new Date(item.created_at).toLocaleDateString("pt-BR")}
                            </Text>
                        </Pressable>
                        <Pressable style={styles.deleteButton} onPress={() => handleDeleteTask(item.id)}>
                            <Text style={styles.deleteButtonText}>Excluir</Text>
                        </Pressable>
                        <Pressable
                            style={styles.editButton}
                            onPress={() => handleOpenEditModal(item)}
                        >
                            <Text style={styles.editButtonText}>Editar</Text>
                        </Pressable>
                    </View>
                )}
            />
            <Modal
                visible={editModalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar tarefa</Text>

                        <TextInput
                            style={styles.modalInput}
                            value={editedTitle}
                            onChangeText={setEditedTitle}
                            placeholder="Digite o novo título"
                            autoFocus
                        />

                        <View style={styles.modalActions}>
                            <Pressable
                                style={styles.cancelButton}
                                onPress={() => setEditModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </Pressable>

                            <Pressable
                                style={styles.saveButton}
                                onPress={handleSaveEdit}
                            >
                                <Text style={styles.modalButtonText}>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(40, 42, 54)',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    texto: {
        color: '#e4e4e4',
        fontStyle: 'italic',
        fontSize: 20,
        marginBottom: 10,
        paddingTop: 20,
        paddingLeft: 15,
    },
    texto2: {
        color: '#e4e4e4',
        fontSize: 18,
        marginBottom: 1,
        paddingLeft: 15,
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
    },
    botao: {
        backgroundColor: '#14ca6f',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        width: '30%',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 14,
    },
    Input: {
        marginBottom: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        paddingLeft: 10,
        borderRadius: 5,
        width: '60%',
    },
    taskItem: {
        backgroundColor: "#343746",
        padding: 16,
        borderRadius: 10,
        marginBottom: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },

    taskTitle: {
        color: "#ffffff",
        fontSize: 16,
    },

    taskCompleted: {
        textDecorationLine: "line-through",
        opacity: 0.6,
    },
    list: {
        width: "100%",
        marginTop: 10,
    },
    emptyText: {
        color: "#aaaaaa",
        textAlign: "center",
        marginTop: 30,
    },
    taskContent: {
        flex: 1,
    },
    taskDate: {
        color: "#aaaaaa",
        fontSize: 12,
        marginTop: 6,
    },

    deleteButton: {
        backgroundColor: "#c0392b",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginLeft: 10,
    },

    deleteButtonText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
    },
    editButton: {
        backgroundColor: "#6272a4",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginLeft: 10,
    },

    editButtonText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    modalContent: {
        backgroundColor: "#343746",
        borderRadius: 12,
        padding: 20,
    },

    modalTitle: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },

    modalInput: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
    },

    modalActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
        gap: 10,
    },

    cancelButton: {
        backgroundColor: "#666666",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },

    saveButton: {
        backgroundColor: "#50c878",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },

    modalButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    sectionTitle: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 18,
        marginBottom: 10,
    },

    sortContainer: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 18,
    },

    sortButton: {
        flex: 1,
        backgroundColor: "#44475a",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },

    selectedButton: {
        backgroundColor: "#12c978",
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "600",
    },
});