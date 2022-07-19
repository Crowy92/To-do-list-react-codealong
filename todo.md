# Todos App

## File structure and props

- [] Create components folder
- [] Create a TodoForm.js file to host our form code
- [] Create a TodoForm functional component and render it on App.js
- [] Better structure: Create a TodoForm folder with an index.js file + an external index.js file which exports the TodoForm code to be used in App.js
- [] Transfer form JSX code from App.js into our newly created TodoForm/index.js component file
- [] Transfer the handleInputText and handleSubmit functions from App.js to TodoForm/index.js
- [] Look at errors - all of our state data is undefined in TodoForm/index.js. That's because our state data is in App.js, so we need to find a way to pass that data onto TodoForm/index.js --> PROPS. Props can only be passed from parents to children, not the other way around.
- [] Pass in the undefined data as props to our component (2 ways - pass props object or pass the data directly) - form should now be working
- [] Create a todos state in App.js, pass it to the component, and make sure the todo typed in the input is stored in the todos array when clicking on the submit button
- [] We're trying to display that todo in a list below our input. Create a TodoList component which will display our list of todos.
- [] In TodoList, render a div with a class of todo-container and an unordered list with a class of todo-list
- [] Pass the todos as a prop to our TodoList component
- [] In our ul component, map over the todos and render todo.text
- [] Create a TodoItem component and import it in TodoList/index.js
- [] Render TodoItem in the mapping over the todos
- [] Pass in the todo as a prop to TodoItem
- [] In TodoItem, render todo.text
- [] In TodoItem, render a div with a class of todo and a list item with a class of todo-item
- [] Pass in todo.text in the list item
- [] Implement a delete function on the click of a delete button
- [] Implement a complete function on the click of a complete button
