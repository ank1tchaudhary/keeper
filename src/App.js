import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Note from './components/notes/Note';
import notes from './components/resource/notes';

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => <Note title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
