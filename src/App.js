import React from 'react'; // we need to import this to be able to use JSX
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import { Header } from './components/Header';
// import CHeader from './components/CHeader';
// import Channel from './components/Channel';
// import { FunctionClick } from './components/FunctionClick';
// import { CFunctionClick } from './components/CFunctionClick';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appstyle.css';
// import Style from './appstyle.module.css';
// import Form from './components/Form';
// import Routing from './components/Routing';
// import LifeCycleA from './components/LifeCycleA';
// import Product from './components/Product';
// import PostList from './components/PostList';
// import PostForms from './components/PostForm';
// import Counter from './components/Counter';
// import HookCounter from './components/HookCounter';
// import Hookobject from './components/Hookobject';
// import HookArray from './components/HookArray';
// import ClassMouse from './components/ClassMouse';
// import FunctionMouse from './components/FunctionMouse';
import A from './components/A';

/*
// Creating element using JSX
const name = <span>Hello React</span>;

// Creating elements using core React
const newElement = React.createElement(
  'h2', // Tag name
  { className: 'newElement' }, // Class name
  'Hello H2 tag' // Class Text/anything that goes in the class
);

const test = () => alert('Hello Deep');

const age = age => {
  if (age > 18) return <span>You are eligible</span>;
  else <span>You are not eligible</span>;
};
*/

/*
// Functional Component <- Favvor this if building only UI
function App() {
  return (
    <div className="App">
      <h1>Hello Deepbaran Kar, {name}</h1>
      {newElement}
      <button onClick={test}>Click Here</button>
      {age(19)}
    </div>
  );
}
*/

// Class component
class App extends React.Component {
  render() {
    // const numbers = [3, 4, 5, 6];

    return (
      <div className="App">
        {/* <h1>Hello Deepbaran Kar, {name}</h1>
        {newElement}
        <button onClick={test}>Click Here</button>
        {age(19)}
        <hr />

        <Header name="Functional" last="Component" />
        <Header name="Deepbaran" last="Kar">
          <p>Deepbaran is a cool guy</p>
        </Header>
        <Header name="Ravi" last="Kumar" />
        <Header name="Sankha" />
        <hr />

        <CHeader name="Class" last="Component" />
        <CHeader name="Deepbaran" last="Kar">
          <p>Deepbaran is a cool guy</p>
        </CHeader>
        <hr />

        <Channel />
        <hr />

        <FunctionClick />
        <CFunctionClick roll="22" numbers={numbers} />
        <hr /> */}

        {/* <h1 className={Style.success}>Green</h1>
        <h1 className="error">Red</h1>
        <Stylesheet isvalue={false}></Stylesheet>
        <Inline></Inline> */}

        {/* <Form></Form> */}

        {/* <Routing></Routing> */}

        {/* <LifeCycleA></LifeCycleA> */}
        {/* <Product></Product> */}
        {/* <PostList></PostList> */}
        {/* <PostForms></PostForms> */}

        {/* <Counter></Counter> */}
        {/* <HookCounter></HookCounter> */}
        {/* <Hookobject></Hookobject> */}
        {/* <HookArray></HookArray> */}

        {/* <ClassMouse></ClassMouse> */}
        {/* <FunctionMouse></FunctionMouse> */}

        <A></A>
      </div>
    );
  }
}

export default App;
