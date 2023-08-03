function Main() {
  return (
    <>
      <section className="actions-notes">
        <div>
          <a href="/create">Сreate note</a>
        </div>
        <div>
          <a href="/note">See note</a>
        </div>
      </section>
      <section className="about-app">
        <div className="about-app__block-about-app block-about-app">
          <h2 className="block-about-app__title">noted</h2>
          <p className="block-about-app__text">
            <span>Noted</span> - This application is designed to send notes or
            messages to another user or to your other computer. All notes and
            messages will be encrypted.
          </p>
          <div className="block-about-app__instruction instruction-app">
            <h3 className="instruction-app__title">How to make a note?</h3>
            <p className="instruction-app__text">
              Follow the &nbsp;
              <a href="/create" className="instruction-app__link">
                link
              </a>
            </p>

            <p className="instruction-app__text">
              Paste or write text and click Create
            </p>

            <p className="instruction-app__text">
              <a className="instruction-app__link">
                Send the generated address to a friend or to your other device
              </a>
            </p>

            <p className="instruction-app__text">
              How to read a note? Follow the provided URL link, or enter the
              hash yourself &nbsp;
              <a href="/note" className="instruction-app__link">
                here.
              </a>
            </p>
            <p>
              hash is all the last characters that come after the slash "/" .
              For example: 5jsquzt9mtukx5hy4bnn5702
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
