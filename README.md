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

## React Art App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/9f9e65cd-0d41-455f-8199-12c38beb2dbc">
</p>

Learning concepts:
- Styling options:
  - Vanilla CSS (CSS classes)
  - Inline style
  - CSS module (tied to build process, CSS file would be named **_{component}.module.css_**)
  - Styled Component package
  - Tailwind CSS
- Static, dynamic and conditional styling
- Pros and cons of different styling options

## Debugging React App

Learning concepts:
- Utilising debugger on browser, i.e. breakpoints, etc. (debugging frontend behavior)
- React **_Strict Mode_**, wrapping **_Strict Mode_** to a component, useful for highlighting potential problems
- React development tool extension on browser

## The Almost Final Countdown App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/1b22b738-cd21-4501-9800-50b795b9d927">
</p>

Learning concepts:
- Utilising React's **_useRef_** access and manipulate DOM directly
- Ref can be used to declare a wide range of things, i.e. DOM element, object, function, etc.
- Objects defined with React's **_useRef_** remain persistent even on component rerender
- Exposing ref to child element using **_forwardRef_**
- Different timer implementation with **_setTimeout_** and **_setInterval_**
- Rendering component in a remote location through **_createPortal_**, not at direct parent/child component

## Project Management App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/d4b7e308-5a4c-4e2f-aed7-ae9224f82781">
</p>

Learning concepts:
- Styling components with Tailwind CSS
- Input validation and rendering error modal in a remote location through **_createPortal_**
- Optimising random access with hashmap/dict implementation
- Understanding props drilling
- Avoid props drilling through the use of React's **_useContext_** API
- Pattern: Outsourcing Context and State Into Separate Provider Component

## Elegant Context App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/c6f3df62-d176-4c45-a592-d61901887293">
</p>

Learning concepts:
- Utilising component composition to avoid props drilling
- Avoid props drilling through the use of React's **_useContext_** API
- Pattern: Outsourcing Context and State Into Separate Provider Component
- Managing states with React's **_useReducer_**

## Place Picker App

<p align="center">
 <img src="https://github.com/leongjinghao/React-Mini-Projects/assets/73938217/43d65bbc-cb01-40c0-8c3b-256c42653639">
</p>

Learning concepts:
- Handling side effects with **_useEffect_** hook
- Situation to use **_useEffect_**:
  - When call-back function execution order is not deterministic (when involving async function)
  - When operations are to be performed on the initial render only (not on subsequent render)
  - When operations are to be performed on certain state, prop, or other variable changes, and not on every render
- Return function in **_useEffect_** hook used to define a clean-up function, which is executed:
  - On component unmount (removed from DOM)
  - Before the next execution of the call-back function defined in **_useEffect_** (element in dependency array gets updated)
- Utilising **_useCallback_** to avoid redefining call-back functions (during rerendering), useful when a call-back function is used in the dependency array of a **_useEffect_** hook
- Optimisation: Outsourcing frequently rerendered elements to another component
