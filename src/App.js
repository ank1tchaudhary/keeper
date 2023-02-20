import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Note from './components/notes/Note';
import notes from './components/resource/notes';
import CreateArea from './components/textBox/CreateArea';
import { useState } from 'react';

function App() {


  const [getNote, setNote] = useState([]);

  function addNote(note){
    console.log("note added ", note)
    setNote((prevData) => {
      return [...prevData,note]
    })
  }

  function onDelete(id){
    console.log("id to be removed " , id)
    setNote(prevData => {
      return prevData.filter((note,index) => index !== id);
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      {getNote.map((noteData,index) => 
        <Note key={index} id={index} title={noteData.title} content = {noteData.content} onDeleteNote={onDelete} />
      )}
      <Footer />
    </div>
  );
}

export default App;
