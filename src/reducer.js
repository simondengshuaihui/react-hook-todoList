export default function todos(state = [], action) {
  switch (action.type) {
    case "INIT":
      return [...action.list];
    case "ADD_TODO":
      return [...state, action.todo];
    case "DEL_TODO":
      return state.filter(item => {
        return item.id !== action.id;
      });
    case "TOGGLE_TODO":
      return state.map(item =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
}
