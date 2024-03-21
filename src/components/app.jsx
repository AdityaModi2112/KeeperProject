import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Nodes from "./nodes";
import CreateArea from "./CreateArea";

function App() {
  const[notes,setNotes]=useState([]);
  function addNote(note){
    setNotes(preNotes=>{
      return [...preNotes,note];
    });
  }
  function deleteNote(id){
    setNotes(preNotes=>{
      return preNotes.filter((noteItem,index)=>{
        return index!==id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
      {notes.map((noteItem, index)=>{
        return (<Nodes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>);
      })}
      <Footer />
    </div>
  );
}

export default App;






/*
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Nodes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
*/
/* keeper part-3
function App() {
  const [items,setItems]=useState([]);
  function onAdd(newNote){
    setItems(preValue=>{
      return [...preValue,newNote]
    })
  }
  function deleteNote(id){
    setItems(preValue=>{
      return preValue.filter((items,index)=>{
        return index!==id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={onAdd}
      />
      {items.map((aadditem,index)=>{
        return <Nodes 
        key={index}
        id={index}
        onDelete={deleteNote}
        title={aadditem.title}
        content={aadditem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
*/
/*
import InputArea from "./inputArea";
import ToDoItem from "./todoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      textChange={handleChange}
      textAdd={addItem}
      textValue={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
*/
/* To do list
function App() {
  const [inputText,setInputText]=useState("");
  const [items,setItems]=useState([]);
  function handleChange(event){
    const newValue=event.target.value;
    setInputText(newValue)
  }
  function handleItem(){
    setItems((preValue) => {
      return [...preValue,inputText];
    })
    setInputText("");
  }
  function deleteItem(id){
    setItems(prevalue=>{
      return prevalue.filter((items,index)=>{
        return index!==id
      }
    )})
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <ToDoItem 
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
            />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
*/
/* changing complex state pratice
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const newValue=event.target.value;
    const inputName=event.target.name;
    setContact(prevalue=>{
      return{
        ...prevalue,
        [inputName]:newValue
      }
    })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/
/* Event handling in React
function App() {

  const[name,setname]=useState("")
  const[click,setClick]=useState("")
  function handleChange(event){
    setname(event.target.value)
  }
  function handleClick(event){
    setClick(name)
    
    event.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={handleClick}>
      <h1 >Hello {click}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

*/




/* Handling event in react
function App() {
  const[HeadingText,setHeadingText]=useState("Hello");
  const[isMouseOver,setMouseOver]=useState(false);
  function handleClick(){
    setHeadingText("Submitted");
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMouseOver?"black":"white"}}
       onClick={handleClick}
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;

*/
/* hook pratice
function App() {
  setInterval(getTime,1000)
  let [time,setime]=useState(new Date().toLocaleTimeString());
  function getTime(){
    setime(new Date().toLocaleTimeString())
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
*/
/* hooks basic
function App() {
  const [count,setcount]=useState(0);

function increase(){
  setcount(count+1)
}
function decrease(){
  setcount(count-1)
}
  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>;
}

export default App;
*/

/*Conditional Rendering pratice
import Form from "./form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form
      isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
*/
/*keeper part -2
import Header from "./header";
import Footer from "./footer";
import notes from "../notes";
import Nodes from "./nodes";


function createNotes(noteTerm){
   return <Nodes 
  key={noteTerm.key}
  title={noteTerm.title}
  content={noteTerm.content}
  />
}


function App(){
    return <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
    </div>
}

export default App;
*/
/* mapping data into components
import Create from "./create";
import emojipedia from "../emogopedia";

function createEmoji(emojiTerm){
  return <Create 
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  description={emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
*/
/* props pratice
import Card from "./card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name= {contacts[0].name}
      src= {contacts[0].imgURL}
      tel= {contacts[0].phone}
      email= {contacts[0].email}
      />
      <Card 
      name= {contacts[1].name}
      src= {contacts[1].imgURL}
      tel= {contacts[1].phone}
      email= {contacts[1].email}
      />
      <Card 
      name= {contacts[2].name}
      src= {contacts[2].imgURL}
      tel= {contacts[2].phone}
      email= {contacts[2].email}
      />
    </div>
  );
}

export default App;
*/
/* Keeper Part 1-
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

function App(){
    return <div>
        <Header />
        <Note />
        <Footer />
    </div>
}

export default App;
*/