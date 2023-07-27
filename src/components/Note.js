// http://localhost:3000/note/np0u7h60qvyjtz4voo9hq5z7
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide'); // скрываем блок когда нам не нужен
  const [errorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            setNoteText(data.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          } else if (!data.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, []);

  function getNote(e) {
    e.preventDefault();
    let url = e.target.elements.url.value;
    console.log(e.target.elements);
    url = url.trim();
    if (url === '') {
      alert('Enter form');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  return (
    <div>
      <div className={lineClass}>
        <h4>Note:</h4>
        <div>{noteText}</div>
      </div>
      <div className={errorClass}>
        <p>Error. Hesh or note not found.</p>
      </div>
      <div className={formClass}>
        <form action="" onSubmit={getNote}>
          <label htmlFor="url">Please enter hash note</label>
          <input type="text" name="url" id="url" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Search note
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
