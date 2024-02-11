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

## Making Components Resusable With Props

Think props as arguments in functions. We can pass numbers of props but we accept it as only one.

```
<CoreConcept
    title="Components"
    description="The core UI building block"
    image={componentsImg}
/>
```

Here I've passed three props, but below on the component I'm just accepting one parameter. It's called props. But I could name anyting.

```
function CoreConcept(props) {  // Here I can also do Object Destructuring eg. function CoreConcept({image, title, description})
  return (
    <li>
      <img src="" alt="" />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  );
}
```

The props will be an object with key value pairs.

Every Custom Components will recieve props.

Pass contents between the Custom Components. Eg.

```
<TabButton>Example 1</TabButton>
```

When recieving, 

```
export default function TabButton(props){
    return(
        <>
            <p>{props.children}</p>
        </>
    )
}
```

We get special built in children prop. This is set by react and not passed as attributes in Custom Components. It simply refers the content
between the component.

```
This way of building components where components can wrap other components or contents is called Component Composition.
```

## Rules Of Hooks
This should only be called on top level of component
    - must not be called outside of React Component Functions
    - must not be called in nested code statement. (eg. inside of If Statements)