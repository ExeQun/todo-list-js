class TodoList {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description) {
        const task = {
            id: this.nextId++,
            description: description,
            completed: false,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(task);
        return task;
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
        } else {
            console.log(`Задача с ID ${taskId} не найдена.`);
        }
    }

    deleteTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        } else {
            console.log(`Задача с ID ${taskId} не найдена.`);
        }
    }

    getAllTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }

    getTaskCount() {
        const total = this.tasks.length;
        const completed = this.getCompletedTasks().length;
        const pending = this.getPendingTasks().length;
        return { total, completed, pending };
    }
}

// Пример использования (тестирование)
const myTodo = new TodoList("Мои задачи");

myTodo.addTask("Купить молоко");
myTodo.addTask("Сделать домашку");
myTodo.addTask("Позвонить маме");

myTodo.completeTask(1);
myTodo.deleteTask(2);

console.log("Все задачи:", myTodo.getAllTasks());
console.log("Выполненные:", myTodo.getCompletedTasks());
console.log("Невыполненные:", myTodo.getPendingTasks());
console.log("Статистика:", myTodo.getTaskCount());