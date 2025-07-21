function Todo({text}) {
    return <li>{text}</li>;
}

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
  <ul>
    {DUMMY_TODOS.map(item => (<Todo text={item} />))}
  </ul>
}
