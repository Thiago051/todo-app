import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskInput;
