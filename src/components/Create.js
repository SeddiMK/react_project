import { useState } from 'react';

function Create() {
  const [url, setUrl] = useState('git');

  let sendData = (obj) => {
    fetch('http://localhost:3500', {
      method: POST,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
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
      <form onSubmit={loadDataFromForm}>
        <label htmlFor="">Введите заметку</label>
        <textarea
          name="note"
          id="note"
          defaultValue="Enter note text"
        ></textarea>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}

export default Create;
