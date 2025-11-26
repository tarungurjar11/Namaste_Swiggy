# React Lecture 5 – The Real Core

## 1. Exports: Default vs Named

### **Default Export**

* One thing per file.
* Imported without curly braces.
* Classic, simple, old‑school vibe.

```js
export default Button;
import Button from './Button';
```

### **Named Export**

* Multiple exports per file.
* Must import using the exact name.

```js
export const Card = () => {}
export const Modal = () => {}
import { Card, Modal } from './UI'
```

**When to use what?**

* Default export → One main purpose. Clean.
* Named export → Many utilities/components in one place.

---

## 2. Code Restructuring (Keeping it 🔥 under 100 lines)

* Keep one component per file.
* Split logic with hooks.
* Separate constants + utilities.
* Avoid god components. If a file feels heavy → break it.
* Follow folder vibes: `components/`, `hooks/`, `utils/`.

---

## 3. Hooks (React’s built-in sorcery)

Hooks are basically **special JS functions** invented by the React team to give superpowers to functional components.

### **useState**

* Gives your component memory.
* When state changes, React re-renders.

```js
const [count, setCount] = useState(0);
```

### **useEffect**

* Side‑effects go here.
* Runs after render.
* Can watch variables.

```js
useEffect(() => {
  console.log('count changed');
}, [count]);
```

### The Golden Rule

> **Whenever a state variable changes, React re-renders the component tree where it’s used.**

No shortcuts, no magic — just React keeping its promise.

---

## 4. React Internals (The cool underground stuff)

React uses something called **Reconciliation**, implemented through a system known as **React Fiber**.

### **React Fiber**

* Think of it as React’s own mini‑OS scheduler.
* Splits work into small chunks so UI never freezes.
* Helps React pause/resume work.
* Re-renders smartly, not blindly.

### **Reconciliation**

* Decides *what* changed.
* Updates the DOM surgically.
* Uses heuristics to make diffing blazing fast.

This is the engine under the hood — silent, powerful, battle-tested.

---

## 5. Putting It All Together

React’s flow in one shot:

1. Component renders.
2. Hooks give it data + life.
3. State changes → triggers re-render.
4. React Fiber splits work.
5. Reconciliation updates only what’s needed.
6. UI stays smooth like butter.

---

## 6. Final Wisdom

Keep files clean.
Respect the structure.
Use hooks to separate concerns.
Trust Fiber — it’s the homie doing heavy lifting.
Write code that future-you won’t roast.

---
