# React JS + Core JavaScript Notes

## 1. React overview
- React is a JavaScript library for building user interfaces.
- Uses components to break UI into reusable pieces.
- React updates only the changed parts of the DOM using a virtual DOM.
- Common use: single-page apps, dynamic UIs, component-based structure.

## 2. JSX
- JSX looks like HTML but is JavaScript.
- You can write `<div>Hello</div>` inside JS.
- JSX gets compiled to `React.createElement()`.
- Must use `className` instead of `class`.
- Curly braces `{}` let you embed JavaScript expressions.
  - Example: `<h1>{title}</h1>`
- Self-closing tags required for empty elements: `<input />`, `<img />`.

## 3. Components
### Function components
- Most common in modern React.
- Simple JS functions that return JSX.
- Example:
  ```js
  function App() {
    return <div>Hello React</div>;
  }
  ```

### Props
- Props are component inputs.
- Passed like HTML attributes.
- Immutable inside child components.
- Example:
  ```js
  <Greeting name="Batman" />
  function Greeting({ name }) {
    return <p>Hello, {name}</p>;
  }
  ```

### State
- State holds component data that can change.
- `useState` hook creates state in functional components.
- Example:
  ```js
  const [count, setCount] = useState(0);
  ```
- Update state with setter functions only.

### Hooks
- `useState`: local state.
- `useEffect`: side effects, data fetch, subscriptions.
- `useRef`: refs for DOM or persistent values.
- `useMemo` / `useCallback`: optimize performance.

## 4. Rendering and return rules
- Components must return a single root element.
- Use fragments `<>...</>` when needed.
- Conditional rendering with ternary or `&&`.
  - Example: `{loggedIn ? <Dashboard /> : <Login />}`
  - Example: `{show && <Modal />}`

## 5. Lists and keys
- Use `map()` to render arrays.
- Each list item needs a unique `key`.
- Avoid using index as key if the list can reorder.
- Example:
  ```js
  users.map(user => <li key={user.id}>{user.name}</li>)
  ```

## 6. Event handling
- Use camelCase event names: `onClick`, `onChange`, `onSubmit`.
- Pass functions, not function calls.
  - Good: `<button onClick={handleClick}>`
  - Bad: `<button onClick={handleClick()}>`
- Use event object when needed: `event.target.value`.

## 7. Component communication
- Parent → child: props.
- Child → parent: callback props.
  - Example:
    ```js
    <Child onSave={handleSave} />
    ```
- Shared state can live in a common ancestor.

## 8. Common React patterns
- Controlled components for forms.
  - Form values managed by state.
- Lifting state up to share data.
- Separation of presentational and container logic.
- Avoid direct DOM manipulation; use state and props.

## 9. Basic JS used in React
### Variables and constants
- `const` for values that should not be reassigned.
- `let` for changeable variables.
- Avoid `var` in modern code.

### Arrow functions
- Shorter syntax.
- Example: `const add = (a, b) => a + b;`
- Often used for event handlers and render helpers.

### Destructuring
- Extract values from objects and arrays.
- Example:
  ```js
  const { title, id } = props;
  const [first, second] = items;
  ```

### Spread and rest
- Spread copies arrays/objects.
  - Example: `const newList = [...list, item];`
  - Example: `const newObj = {...obj, active: true};`
- Rest collects remaining items.
  - Example: `function fn(...args) {}`

### Template literals
- Use backticks for strings with expressions.
  - Example: ``const text = `Hello ${name}`;``

### Conditional expressions
- Ternary operator: `condition ? a : b`.
- Logical AND for short-circuit rendering: `condition && <span />`.

### Array methods
- `map()`: transform arrays.
- `filter()`: keep matching items.
- `find()`: return first match.
- `reduce()`: accumulate values.

### Object shorthand
- Use shorthand properties: `{ name, age }`.
- Use computed keys: `{ [key]: value }`.

### Optional chaining
- Safely access nested properties.
  - Example: `user?.profile?.name`
- Useful when data may be undefined.

### Nullish coalescing
- Use `??` to default only when `null` or `undefined`.
  - Example: `const value = input ?? 'default';`

### Promises and async/await
- Use `fetch()` with `async` functions.
- Example:
  ```js
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  }
  ```

### Pure functions
- Functions should avoid side effects when possible.
- Important for state updates and predictable UI.

### Immutability
- Never mutate state directly.
- Use copies for arrays/objects.
  - Example: `setItems(prev => [...prev, newItem]);`

## 10. React-specific JSX/JS behaviors
- Use expressions, not statements, inside JSX.
- `className`, `htmlFor`, `defaultValue`, `defaultChecked`.
- `style` receives an object: `<div style={{ color: 'red' }}>`.
- Comments in JSX: `{/* comment */}`.

## 11. Troubleshooting common issues
- `Cannot read property of undefined`: check props and state shape.
- Missing `key` warnings: add stable keys.
- State not updating: use setters, not direct assignment.
- Infinite loops in `useEffect`: include correct dependency array.

## 12. Quick cheat sheet
- `useState(initialValue)`
- `useEffect(() => {}, [])`
- `<Component prop={value} />`
- `const [value, setValue] = useState('')`
- `items.map(item => <Item key={item.id} item={item} />)`
- `const result = condition ? a : b`
- `const copy = [...array]`
- `const merged = {...obj1, ...obj2}`

---

Keep practicing by building small React components and using these JavaScript features together. Good notes help connect React concepts with the underlying JS patterns that power them.