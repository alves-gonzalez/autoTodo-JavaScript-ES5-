👨‍💻 Author
Alves Gonzalez
Personal Project • JavaScript ES5 • Browser Automation# 🧠 autoTodo (JavaScript ES5)

## 📋 Overview
`autoTodo` is a personal project I worked on to practice **browser automation and DOM manipulation** using pure **JavaScript ES5**.  
It automates interactions on the official TodoMVC JavaScript ES5 web app:

🔗 **Website:** [https://todomvc.com/examples/javascript-es5/dist/](https://todomvc.com/examples/javascript-es5/dist/)

This project simulates real user actions — such as creating, editing, toggling, filtering, and deleting todo items — directly from the Chrome DevTools console or Snippets panel.  
It was built entirely with **vanilla JavaScript**, without any third-party libraries or frameworks.

---

## ⚙️ Features
- Click individual or all toggle checkboxes  
- Create new todos programmatically  
- Edit existing todos using double-click and blur events  
- Delete specific todos by index  
- Clear completed todos  
- Filter between **All**, **Active**, and **Completed** views  
- 100% ES5 compatible — no modern JavaScript syntax used  

---

## 🧩 Methods

| Method | Description | Example |
|---------|-------------|----------|
| `autoTodo.clickItem(item)` | Clicks a given DOM element | `autoTodo.clickItem(document.querySelector('.toggle'));` |
| `autoTodo.toggleAll()` | Clicks the "toggle all" checkbox | `autoTodo.toggleAll();` |
| `autoTodo.selectItemX(x)` | Clicks the checkbox for the *x-th* todo item | `autoTodo.selectItemX(2);` |
| `autoTodo.deleteItemX(x)` | Deletes the *x-th* todo item | `autoTodo.deleteItemX(3);` |
| `autoTodo.clearCompleted()` | Clears all completed todos | `autoTodo.clearCompleted();` |
| `autoTodo.filterAll()` | Shows all todos | `autoTodo.filterAll();` |
| `autoTodo.filterCompleted()` | Shows only completed todos | `autoTodo.filterCompleted();` |
| `autoTodo.filterActive()` | Shows only active todos | `autoTodo.filterActive();` |
| `autoTodo.createTodo()` | Creates a new todo named "name" | `autoTodo.createTodo();` |
| `autoTodo.amendTodo(x)` | Double-clicks and edits the *x-th* todo item | `autoTodo.amendTodo(1);` |

---

## 💻 Example Usage
```js
autoTodo.createTodo();
autoTodo.selectItemX(1);
autoTodo.amendTodo(1);
autoTodo.deleteItemX(2);
autoTodo.clearCompleted();
autoTodo.filterCompleted();

🧪 How to Use

Go to the TodoMVC JavaScript ES5 app:
🔗 https://todomvc.com/examples/javascript-es5/dist/

Open Chrome DevTools → Sources → Snippets

Create a new snippet named autoTodo.js

Paste the full autoTodo code

Press Ctrl + Enter (Windows) or Cmd + Enter (Mac) to run it

In the Console, call any function such as:
autoTodo.toggleAll();

🧰 Requirements

Works in any modern web browser

Written in pure JavaScript (ES5)

No external dependencies
