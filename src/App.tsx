import React from "react";
import KanbanBoard from "./components/KanbanBoard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Trello-Style Todo Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
