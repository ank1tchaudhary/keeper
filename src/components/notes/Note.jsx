import './Note.css'

export default function Note(props){
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => props.onDeleteNote(props.id)}>DELETE</button>
    </div>
}