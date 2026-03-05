import { useState } from "react";
import styles from "./ListsAndKeys.module.css";

type Task = {
    id: number;
    text: string;
};

const initialTasks: Task[] = [
    { id: 1, text: "Learn React basics" },
    { id: 2, text: "Understand JSX" },
    { id: 3, text: "Build a component" },
];

const ListsAndKeys = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        const task: Task = { id: Date.now(), text: newTask.trim() };
        setTasks([...tasks, task]);
        setNewTask("");
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Lists & Keys</h2>
                <p className={styles.subtitle}>
                    Rendering arrays with .map() and why keys matter.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    To render a list in React, you call <code>.map()</code> on an array and
                    return JSX for each item. React requires a <code>key</code> prop on each
                    element so it can efficiently track which items changed, were added, or
                    removed during re-renders.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Almost every app renders lists —
                    emails in Gmail, products on Amazon, messages in Slack, songs in Spotify.
                    React needs <code>key</code> to efficiently update the DOM when items
                    change, are reordered, or removed. Without keys, React has to re-render
                    the entire list. With keys, it only updates what changed.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Add and remove tasks. Each item has a stable <code>key</code> so React
                    tracks them efficiently:
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.addRow}>
                        <input
                            className={styles.addInput}
                            type="text"
                            placeholder="New task..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTask()}
                        />
                        <button className={styles.addBtn} onClick={addTask}>Add</button>
                    </div>
                    <ul className={styles.taskList}>
                        {tasks.map((task) => (
                            <li key={task.id} className={styles.taskItem}>
                                <span>{task.text}</span>
                                <button
                                    className={styles.removeBtn}
                                    onClick={() => removeTask(task.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    {tasks.length === 0 && (
                        <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: 0 }}>
                            No tasks yet. Add one above.
                        </p>
                    )}
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`const [tasks, setTasks] = useState<Task[]>(initialTasks);

// Render the list:
<ul>
    {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
    ))}
</ul>

// Add immutably (spread):
setTasks([...tasks, newTask]);

// Remove immutably (filter):
setTasks(tasks.filter((t) => t.id !== id));`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Always use a stable, unique <code>key</code> — typically a database ID.
                    Never use array index as key if items can be reordered or removed.
                    Use <code>.filter()</code> to remove items and spread to add —
                    never mutate the array directly.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>ContactList</code> component that:
                    </p>
                    <ul>
                        <li>Has an array of contacts with <code>id</code>, <code>name</code>, and <code>email</code></li>
                        <li>Renders each contact as a card showing name and email</li>
                        <li>Has a "Delete" button on each card that removes the contact</li>
                        <li>Uses <code>key=&#123;contact.id&#125;</code> on each item</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ListsAndKeys;
