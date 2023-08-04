function About() {
  return (
    <main className="main-page">
      <section className="about">
        <div>
          <p>
            This application is designed to send notes or messages to another
            user or to your other computer. All notes and messages will be
            encrypted.
          </p>
          <p>
            The service sends data to the server. The server is not important
            (php, node, mySql). When we want to read a message, a note, we take
            the hash from the database in encrypted form and read it.
          </p>
          <p className="about__me">
            The app is made with React.
            <br />
            Contacts to contact me:
            <br />
            web developer Maks:
            <br />
            mail: web.egorovm@gmail.com <br />
            github: https://github.com/SeddiMK
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
