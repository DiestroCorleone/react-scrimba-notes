Alinear elementos en nav:

nav {
    display: flex;
    align-items: center;

}

------------------------

Renderizar si no es null:

{props.setup && <h3>Setup: {props.setup}</h3>}


------------------------

Array.map():

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

// console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})

//or

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)

//Cool way to use Map: 

const thingsArray = ["Thing 1", "Thing 2"]
 
  
    
const thingsElements = thingsArray.map(thing => <p>{thing}</p>)

<div>
	{thingsElements}
</div>

-----------------------

Spread operator:

Divide un array un objeto en sus partes, con lo cual (ejemplo):

``
arraySpredeado = arraySinSpredear.map(arrayItem =>{
	return <Component
			key={arrayItem.id}
			{...arrayItem}

		/>
})

``

Luego, podemos utilizar los elementos del array de la siguiente manera:

``

<Component
	atributo0={props.title}
	atributo1={props.description}
	atributo2={props.rating}
/>

``

Si hubieramos pasado el array como:

``
arraySpredeado = arraySinSpredear.map(arrayItem =>{
	return <Component
			key={arrayItem.id}
			arrayItem={arrayItem}

		/>
})

``

...en el componente deberíamos haberlo declarado así:

``

atributo0={props.arrayItem.title}

``

And so on.


-----------------------------------------

USE STATE

const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

-----------------------------------------------

HORA DEL DÍA 

function greeting(name) {
    const date = new Date();
    const hours = date.getHours();
    var timeOfDay;
    
    switch(true){
        case (hours >= 4 && hours < 12):
            timeOfDay = "morning";
            break;
        case (hours >= 12 && hours < 17):
            timeOfDay = "afternoon";
            break;
        case (hours >= 17 && hours < 20):
            timeOfDay = "evening";
            break;
        case (hours >= 20 && hours < 4):
            timeOfDay = "evening";
    }
    
    console.log(hours >= 4 && hours < 12);
    
    const node = document.createElement("H1");
    const textNode = document.createTextNode(`Good ${timeOfDay} ${name}!`);
    node.appendChild(textNode);
    
    document.getElementById("root").appendChild(node);
}

greeting("Bob")

-----------------------------------------------

MATH RANDOM

props.data.memes.url;

const memes = memesData.data.memes;

const meme = memes[Math.floor(Math.random() * memes.length)];

-----------------------------------------------

FORMA CORRECTA DE MODIFICAR UN ESTADO

    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(function(oldValue) {
            return oldValue + 1
        })
    }

BUENA PRÁCTICA (PASAR FUNCIÓN FLECHA CALLBACK)

    function add() {
        setCount(prevCount => prevCount + 1)
    }    

-----------------------------------------------

AGREGAR ELEMENTOS A UN ARRAY ALMACENADO COMO STATE

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length +1}`])
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

-----------------------------------------------

CAMBIAR ESTADO DE UN ELEMENTO DE UN OBJETO

//Siendo este el objeto:
   
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

//Para actualizar solo uno de sus datos, se hace así:   

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        });
    }

//O así, no olvidar los paréntesis: 

    function toggleFavorite() {
        setContact(prevContact => ({...prevContact, isFavorite: !prevContact.isFavorite}))
    }    

-----------------------------------------------  

DADO UN ARRAY DE OBJETOS, ITERAR A TRAVÉS DEL MISMO Y MODIFICAR UNO DE SUS VALORES:


//Array de objetos:

export default [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    }
]

//Función:    

    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            
            for(let square in prevSquares) {
                const currentSquare = prevSquares[square]
                
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
                
            }
            return newSquares
        })
    }

//Explicación:

-En el setter, definimos una variable igual a un array vacío (newArray).
-Iniciamos un loop for que itere por el prevArray, dentro del cual definimos una variable currentElement igual al elemento que estemos iterando (el 'i').
-Si el id de dicho elemento es igual al id tomado por la función, declaramos una nueva variable (updatedElement) en la cual spredeamos el currentElement, y definimos el id (o lo que sea que queramos cambiar). Fuera del updatedElement, pusheamos en updatedElement al newArray.
-Else, pusheamos el currentElement al newArray.
-Fuera del for, retornamos newArray.

VERSIÓN SIMPLIFICADA CON MAP Y OPERADOR TERNARIO:

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

-----------------------------------------------

MANEJAR VARIOS EVENTOS CON UN SOLO HANDLER:

//Dado un objeto (en este ejemplo, input en form) con varias propiedades:

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

//En el form nos aseguramos de que el 'name' de cada input sea igual a la propiedad del objeto:
//No olvidar agregar el 'value' del input igual al estado que representa ese input value.

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"} //No olvidar las peculiaridades del radio button.
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

 		<label htmlFor="favColor">What is your favorite color?</label> //Los Select son parecidos al Input, sin muchos cambios.
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>            
        </form>
    )

//Y luego se actualiza desde una sola función de la siguiente manera (agregamos un ternario para determinar si es checkbox, cuál es la propiedad que debemos tener en cuenta):

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleChange(event) { //Misma función con return implícito.
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
           [name]: type === "checkbox" ? checked : value
        }))
    }


//Recordar encerrar 'event.target.name' entre corchetes, y que los checkbox no se manejan con 'value', sino con 'checked' (booleano).

//En la función handleSubmit, pasada a la prop onSubmit del form, debemos emplear 'event.preventDefault' para evitar el refresh de la página, del mismo modo que en un tradicional form en HTML.

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

-----------------------------------------------

HOOKS DE EFECTO:

//El mismo nos permitirá interactuar con diversos elementos de los cuales React no se encarga o, de otro modo, podrían ocasionar efectos secundarios (llamadas a APIs, interacturar con el sistema de archivos, o cualquier sistema externo a React).
//Consiste en efectuar la función que buscamos dentro del hook, para luego determinar un 'dependency array' que garantizará que la función solo se ejecute cuando los elementos en dicho array sufran cambios. En el siguiente ejemplo, el console log solo se ejecutará cuando 'count' haya sufrido cambios.

//---------------------

import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    React.useEffect(()=>{
        console.log("Effect function ran");
    }, [count]);
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}

-----------------------------------------------

CLEANUP FUNCTIONS:

//Al usar los hooks de efecto, si el componente deja de estar 'montado', debemos emplear una función de limpieza, expresada como un return en el useEffect. Ejemplo:

import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function reportWidth(){    //Esta será la función que se ejecutará con el hook.
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", reportWidth);
        
        return () => {window.removeEventListener("resize", reportWidth)} //En este caso, es remover el eventListener de 'resize' y, como segundo parámetro, la función previa.
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

--------------------------------------

LOCALSTORAGE:

	const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes"))|| [])

    React.useEffect(() => {
        function saveNotes(){
            localStorage.setItem("notes", JSON.stringify(notes));     //setItem toma dos parámetros, el nombre del item y lo que vamos a mandarle.      
        }
        saveNotes();
    }, [notes]);

------------------------------

LAZY STATE INITIALIZATION: 

//Cuando queremos evitar que un estado se setee cada vez que se ha de re renderizar nuestra app, podemos iniciarlo como una función anónima para evitarlo

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )


=======ejercicio===============

import React from "react"

export default function Sidebar(props) {
    function getSnippet(text){
        let snippet = text.split("\n");
        return snippet[0];
    }
    
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{
                    getSnippet(note.body)
                }</h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}



//----Mandar nota más reciente al inicio del sidebar

import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    /**
     * Challenge: When the user edits a note, reposition
     * it in the list of notes to the top of the list
     */
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes =>{
            const newNotes = [];                                       //Inicializamos un array vacío
            for(let i = 0; i < oldNotes.length; i++){                  //Iteramos por el mismo 
                if(oldNotes[i].id === currentNoteId){				   //Si el id coincide con la 'currentNote'	
                    newNotes.unshift({ ...oldNotes[i], body: text });  //La nota es enviada al principio del nuevo array
                }else{
                    newNotes.push(oldNotes[i]);                        //Si no, la nota es enviada al final.
                }
            }
            return newNotes;                                           //Retornamos el nuevo array.
        });
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}

==================Eliminar item del array================



------------------El botón que llama a la función-----------------------

                <button 
                    className="delete-btn"
                    onClick={(e) => props.deleteNote(e, note.id)} //Si debemos pasar más de un parámetro a una función activada por un evento,
                >												  //debemos emplear (evento) => función(evento, parámetro)


 //-----------------------

import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // Put the most recently-modified note at the top
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }
    
    /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */
    
    function deleteNote(event, noteId) {
        event.stopPropagation()
        // Cómo lo hizo el profe:

        function deleteNote(event, noteId) {
        	event.stopPropagation() //Evita que el evento afecte a los elementos padre.
        	setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId)) //Añade el elemento al array si se cumple la condición.
    	}

    	//Cómo lo hice yo:
        setNotes(oldNotes => {
            const arrayWithDeletion = [];
            
            for(let i = 0; i < oldNotes.length; i++){
                if(oldNotes[i].id != noteId){
                    arrayWithDeletion.push(oldNotes[i]);                       
                }
            }
            return arrayWithDeletion; 
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}


----------------------------------------

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

