# React-Mini-Projects
This repository contains mini projects developed during the React course exercises, available at: https://www.udemy.com/course/react-the-complete-guide-incl-redux/

# Mini Projects
## React Essentials App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/1814a13d-e82f-4e62-b9a4-c16464181e25">
</p>

Learning concepts:
- React component-based development
- Managing object state by utilising React's **_useState_** hook
- Passing properties on parent to child component through **_props_**
- Utilising **_array.map_** function to dynamically define multiple component instances, and spread **_props_** on each component instance
- Wrapping multiple UI elements in a fragment on return (when appropriate)
- Elevating object state to the parent component when multiple sibling components require information on the object state
- Forwarding **_props_** to wrapped element
- Utilising **_props.children_** to retrieve nested UI elements
- Utilising **_props.something_** to store chunks of html code (UI elements), similar to the capability of **_props.children_**

## Tic Tac Toe App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/fbbbed05-42e3-490f-98d2-ee10084776bf">
</p>

Learning concepts:
- Conditionally adding class name
- Elevating object state to the parent component when multiple sibling components require information on the object state
- Deriving an object from another object state (**_gameTurns_** state -> **_gameBoard_** object)
- Resetting object state to achieve a clean slate
- Observing a bug resulting from object initialisation with another object reference, use a deep copied object instead

## Investment Calculator App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/f0235b6e-221e-4909-bdee-db2c6a5f7d50">
</p>

Learning concepts:
- Utilising concepts learnt to develop the application
- Defining a single object state to manage multiple attributes (multiple input fields bundle within a single **_userInput_** state)
- Utilising **_array.map_** function to dynamically define multiple component instances, and spread **_props_** on each component instance
- Conditionally renders UI elements
