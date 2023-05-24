import React, { useEffect, useState } from 'react';

import todosAPI, { TTodo } from './api/todos';

const App: React.FC = () => {
  const [todo, setTodo] = useState<TTodo | null>(null);

  const getTodo = async () => {
    try {
      const response = await todosAPI.getTodo(1);
      const todo = response.data;

      setTodo(todo);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      ID - {todo?.id} <br />
      userId - {todo?.userId} <br />
      title - {todo?.title} <br />
      completed - {todo?.completed} <br />
    </div>
  );
};

export default App;
