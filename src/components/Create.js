import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); // скрываем блок когда нам не нужен
  const [formClass, setFormClass] = useState(''); // показываем блок когда нам не нужен

  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.result) {
          setUrl(env.url + '/' + data.url);
        }
      });
  };

  let loadDataFromForm = (e) => {
    e.preventDefault();
    let note = e.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Fill in the field');
      return false;
    }
    sendData({ note: note });
  };

  let copyURL = () => {
    // Get the text to be copied from the input field
    const textToCopy = document.getElementById('textToCopy').value;

    // Create a temporary textarea element to hold the text to be copied
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(tempTextarea);

    // Select the text inside the textarea
    tempTextarea.select();

    try {
      // Copy the selected text to the clipboard
      document.execCommand('copy');
      // console.log('Text copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy text to clipboard:', err);
    } finally {
      // Remove the temporary textarea from the document
      document.body.removeChild(tempTextarea);
    }
  };

  return (
    <main className="main-page">
      <section className="main-page__create create">
        <form
          onSubmit={loadDataFromForm}
          id="form-create"
          className={formClass}
        >
          <label htmlFor="">Enter note</label>
          <div className="create__block-textarea">
            <textarea
              name="note"
              id="note"
              placeholder="Enter note text"
              // defaultValue=""
            ></textarea>
            <button className="create__btn btn" type="submit">
              Create
            </button>
          </div>
        </form>

        <div className={lineClass}>
          {/* <div id="textToCopy" className="create__url">
            {url}
          </div> */}
          <div id="textToCopy" className="create__url">
            <input
              type="text"
              id="textToCopy"
              className="create__url-input"
              defaultValue={url}
            />
          </div>
          <button className="create__btn-copy-url btn" onClick={copyURL}>
            Copy link to Clipboard
          </button>
          <div>
            <button
              className="create__btn-new-note btn"
              onClick={function () {
                window.location.reload();
              }}
            >
              Create a new note
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Create;
