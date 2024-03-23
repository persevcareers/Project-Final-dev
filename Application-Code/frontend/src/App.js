import React, { Component } from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css"; // Update your CSS file accordingly

class App extends Component {
    state = {
        tasks: [],
        currentTask: "",
        studentName: "",
        studentEmail: "",
        studentGrade: "",
    };

    // Method to handle changes in the student registration form fields
    handleStudentChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Method to handle submission of the student registration form
    handleStudentSubmit = (e) => {
        e.preventDefault();
        const { studentName, studentEmail, studentGrade } = this.state;

        // Add logic to handle the submission of student registration data
        // For example, you can send the data to an API, store it in state, or perform other actions
        console.log("Student Name:", studentName);
        console.log("Student Email:", studentEmail);
        console.log("Student Grade:", studentGrade);

        // Reset the form fields after submission
        this.setState({ studentName: "", studentEmail: "", studentGrade: "" });
    };

    render() {
        const { tasks, currentTask, studentName, studentEmail, studentGrade } = this.state;
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Perseverance Student Checklist</h1>
                </header>
                <div className="main-content">
                    <Paper elevation={3} className="todo-container">
                        <form onSubmit={this.handleStudentSubmit} className="student-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="student-input"
                                value={studentName}
                                onChange={this.handleStudentChange}
                                name="studentName"
                                required={true}
                                placeholder="Student Name"
                            />
                            <TextField
                                variant="outlined"
                                size="small"
                                className="student-input"
                                value={studentEmail}
                                onChange={this.handleStudentChange}
                                name="studentEmail"
                                required={true}
                                placeholder="Student Email"
                            />
                            <TextField
                                variant="outlined"
                                size="small"
                                className="student-input"
                                value={studentGrade}
                                onChange={this.handleStudentChange}
                                name="studentGrade"
                                required={true}
                                placeholder="Student Grade"
                            />
                            <Button
                                className="add-student-btn"
                                color="primary"
                                variant="outlined"
                                type="submit"
                            >
                                Register Student
                            </Button>
                        </form>
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Add Check List Items"
                            />
                            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
                                Add Item
                            </Button>
                        </form>
                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div className={task.completed ? "task-text completed" : "task-text"}>
                                        {task.task}
                                    </div>
                                    <Button onClick={() => this.handleDelete(task._id)} color="secondary" className="delete-task-btn">
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default App;
