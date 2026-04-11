import { useState } from 'react'

const title = "Bonjour les gens";
const style = {color: "red", backgroundColor:"blue"}
const todos = [
  'Presenter react',
  'Presenter le JSX',
  'Creer des composants'
]

function App() {
  
  const handleClick = () =>
  {
    alert();
  }

  return <>
              <Title/>
              <input type="text"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis maiores ipsam incidunt, odio, facere perspiciatis iure repudiandae magni similique sapiente quisquam quaerat in cum reiciendis voluptate, veritatis earum expedita.</p>
        <ul>
          {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
        </>;
}


function Title()
{
  return <h1>Bonjour les Gens</h1>;
}

export default App
