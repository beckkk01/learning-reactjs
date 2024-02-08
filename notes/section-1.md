# Section 1

### What is ReactJS?
React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
    - Maintained by Meta
    - Used to develop single-page or server-rendered applications with frameworks like NextJS.

## Section 2

Section 2 was about ReactJS Refresher. I know and I'll reacall it when its needed.

Skipped

# Section 3 - React Essentials

React Components are just React Functions which returns JSX.

Components, JSX & State

    - Building User Interfaces With Components
    - Using, Sharing & Outputting Data
    - Handling User Events
    - Building Interactive UIs with State

Components are UIs Building Blocks. React Apps are built by combining components.

JSX stands for JavaScript Syntax Extension
    - Used to describe & create HTML elements in JavaScript in a Declarative way.
    - It is not supported by browsers
    - React Projects come with a build process that transforms JSX code (behind the scenes) to code that does work in browsers.

## Component Functions Must Follow These Rules

    - The Function name must start with an uppercase character
    - Muilt-word names should be writen in PascalCase (eg. 'MyHeader')
    - Recommended to pick a name that describes the UI Building block
    - Returns 'Renderable Content', in most cases JSX

All tags in HTML starts with lowercase, so it makes easy to identify and work with custom components.

After creating my first component when saw the source code I saw nothing. No header HTML was rendered.

Only one div in body and that was root.

But the important thing to note that it import index.jsx too in script tag.

```
<script type="module" src="/src/index.jsx"></script>
```
index.html is served where index.jsx is imported in script tag and in index.jsx App.jsx is imported.


## Dynamic Values

Curly Braces {} - to output dynamic values between elements tags or also value for an attribute.

### Important

if-statements, for-loops, function definitions and other block statements are not allowed in curly braces. Only expressions that directly produce a value.

