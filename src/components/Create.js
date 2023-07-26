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
        console.log(data);
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
      alert('Заполните поле');
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="">Введите заметку</label>
        <textarea
          name="note"
          id="note"
          defaultValue="Enter note text"
        ></textarea>
        <button type="submit">Создать</button>
      </form>
      <div className={lineClass}>
        <div>{url}</div>
        <div>
          <button
            onClick={function () {
              window.location.reload();
            }}
          >
            Создать новую заметку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
