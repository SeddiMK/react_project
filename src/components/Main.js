function Main() {
  return (
    <>
      <section className="actions-notes">
        <div>
          <a href="/create" className="actions-notes__btn">
            Сreate note
          </a>
        </div>
        <div>
          <a href="/note" className="actions-notes__btn">
            See note
          </a>
        </div>
      </section>
      <section className="about-app">
        <div className="about-app__block-about-app block-about-app">
          <h2 className="block-about-app__title">Encrypted notes</h2>
          <p className="block-about-app__text">
            <span>NoteS</span> - this application is designed to send notes or
            messages to another user or to your other computer. All notes and
            messages will be encrypted.
          </p>
          <div className="block-about-app__instruction instruction-app">
            <h3 className="instruction-app__title">How to make a note?</h3>
            <p className="instruction-app__text">
              Follow the &nbsp;
              <a href="/create" className="instruction-app__link">
                link Create
              </a>
            </p>

            <p className="instruction-app__text">
              Paste or write text and click Create
            </p>

            <p className="instruction-app__text">
              Send the generated address to a friend or to your other device
            </p>

            <p className="instruction-app__text">
              How to read a note? <br /> Follow the provided URL link, or enter
              the hash yourself &nbsp;
              <a href="/note" className="instruction-app__link">
                here.
              </a>
            </p>
            <p>
              hash is all the last characters that come after the slash "/" .{' '}
              <br />
              For example: 5jsquzt9mtukx5hy4bnn5702
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
