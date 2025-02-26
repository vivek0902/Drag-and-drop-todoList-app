# Drag-and-Drop Todo List App

## Overview

The **Drag-and-Drop Todo List App** is a simple yet powerful React application that allows users to manage their tasks efficiently. The app enables users to create, update, and delete tasks, as well as drag and drop tasks between different categories. The state of the tasks is stored in **localStorage**, ensuring that progress is retained even after a page refresh.

## Features

- **Add Todos:** Users can enter tasks and add them to the list.
- **Drag and Drop:** Easily move tasks between different sections.
- **Edit Tasks:** Drag a task to the input field to modify and update it.
- **Delete Tasks:** Drag a task to the delete section to remove it.
- **Persistent Storage:** Tasks are stored in `localStorage`.
- **Modern UI:** Styled with CSS and gradient effects for a sleek look.

## Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **CSS**
- **LocalStorage API**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/drag-and-drop-todo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd drag-and-drop-todo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Type a task in the input field and press `Enter` or click **Add Todos**.
- Drag tasks between sections (e.g., **Todo**, **In Progress**, **Completed**).
- Drag a task to the **Edit** section to modify it.
- Drag a task to the **Delete** section to remove it.
- The app will save your tasks automatically in `localStorage`.

## File Structure

```
.
├── src
│   ├── App.js       # Main application component
│   ├── todoData.js  # Default task data
│   ├── App.css      # Styling for the application
│   ├── index.js     # React DOM rendering
│
├── public
│   ├── index.html   # Main HTML template
│
├── package.json     # Project dependencies
├── README.md        # Documentation
```

## Future Enhancements

- Add user authentication for personalized task lists.
- Implement a database backend for cloud storage.
- Introduce drag-and-drop animations for better UX.

Enjoy using the **Drag-and-Drop Todo List App**!
