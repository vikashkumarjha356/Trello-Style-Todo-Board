# Trello-Style Todo Board

This project is a Trello-style todo board built with React, Redux, and Tailwind CSS. It allows users to organize their tasks into different columns and drag-and-drop tasks between columns.

## How to Run the Project Locally

1. **Clone the repository:**
   git clone https://github.com/your-username/Trello-Style-Todo-Board.git
   cd Trello-Style-Todo-Board

2. Install Dependencies
    npm install

3. Start the development server:
    npm run dev
  
4. Open the project in your browser 
    http://localhost:5173

## Approach Taken
 The project is built using the following technologies:

  *React*: For building the user interface.
  *Redux*: For state management.
  *Tailwind CSS*: For styling the components.
  *@dnd-kit/core*: For drag-and-drop functionality.
  
## Key Components
  *App.tsx*: The main component that renders the header and the Kanban board.
  *KanbanBoard.tsx*: The component that renders the columns and handles drag-and-drop events.
  *Column.tsx*: The component that renders individual columns and their tasks.
  *Task.tsx*: The component that renders individual tasks.

## State Management
  The state of the tasks is managed using Redux. The taskSlice contains actions and reducers for changing the status of tasks when they are dragged and dropped between columns.

## Limitations
  Currently, the state of the tasks is not persisted. Adding local storage or a backend API to save and load tasks would improve the user experience.