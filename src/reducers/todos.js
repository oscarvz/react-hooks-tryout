function TodosReducer(initialState, { type, payload }) {
  switch (type) {
    case 'ADD-TODO':
      return [...initialState, payload];

    case 'TOGGLE-TODO':
      return [
        ...initialState.map((t) => {
          if (t.id === payload.id) {
            return Object.assign({}, t, {
              isDone: !payload.checked,
            });
          }
          return t;
        }),
      ];

    case 'REMOVE-TODO':
      return initialState.filter((t) => t.id !== payload.id);

    case 'REMOVE-SELECTED':
      return initialState.filter((t) => !t.isDone);

    case 'REMOVE-ALL':
      return [];

    default:
      return initialState;
  }
}

export default TodosReducer;
