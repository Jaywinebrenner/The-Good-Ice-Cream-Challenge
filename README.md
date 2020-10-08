# Ice Cream Flavor Challenge

Front end A/B testing demands a strong working knowledge of DOM manipulation. There are often many different ways to achieve the same result.

## Challenge

**Provide JavaScript code which will manipulate the initial state of an HTML document with an empty unordered list such that the list will contain 7 ice cream flavors from the global array `iceCreamFlavors` with each flavor as child text of a *li* element with the class "ice-cream-flavor".**

Your challenge is to provide meaningfully different solutions using various techniques. Please provide at least 3 solutions, but you are welcome to do as many as you'd like. Each solution should be its own file under a `solutions/` directory. Filenames should follow the following convention: `solution1.js`, `solution2.js`, etc. Clone this repo and provide your solutions on your GitHub account. See email for submission instructions.


### Expected output

Initial state of the list:
```
  <ul class="ice-cream-list">
  </ul>
```

Expected goal state of the list:
```
  <ul class="ice-cream-list">
    <li class="ice-cream-flavor">vanilla</li>
    <li class="ice-cream-flavor">chocolate</li>
    <li class="ice-cream-flavor">Cherry Garcia</li>
    <li class="ice-cream-flavor">Neopolitan</li>
    <li class="ice-cream-flavor">French vanilla</li>
    <li class="ice-cream-flavor">bubble gum</li>
    <li class="ice-cream-flavor">butter pecan</li>
  </ul>
```

### Assumptions About Code Execution
- The DOM will be in the fully-loaded state of the markup included in this repo. *See* `index.html`
- Your code will execute in a global context. *(e.g. pasted in the browser console)*
- The DOM state will reset for each solution.
- jQuery will be available globally as `jQuery` or `$`.
- An array of strings (ice cream flavors) will be available globally as `iceCreamFlavors`. The flavors exist in the array as follows:
```
[
  'vanilla',
  'chocolate',
  'Cherry Garcia',
  'Neopolitan',
  'French vanilla',
  'bubble gum',
  'butter pecan'
];
```