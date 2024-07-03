/* eslint-disable react/prop-types */
import { useState } from 'react';
import useIsOnline from './customHooks/useIsOnline';
import useMousePointer from './customHooks/useMouseMove';
import useTodo from './customHooks/useTodo'
import useWindowResize from './customHooks/useWindowResize';
import useInterval from './customHooks/useInterval';
import useDebounce from './customHooks/useDebounce';

// function App() {
//   const [todos, loading] = useTodo(5)
//   if(loading){
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} key={todo.title} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }/



// function App() {
//   const isOnline = useIsOnline(5);

//   return (
//     <>
//       {isOnline ? "You are online yay!" : "You are not online"}
//     </>
//   )
// }


// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// function App() {
//   const mousePointer = useWindowResize();

//   return (
//     <>
//       Your window size is width: {mousePointer.x}  height: {mousePointer.y}
//     </>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    <p>{debouncedValue}</p>
    </>
  );
};
export default App;