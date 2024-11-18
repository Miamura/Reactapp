import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name} from {props.town}. You are {props.age} years old.
      </p>
    </>
  );
};

const Ystavat = ({ friends }) => {
  return (
    <>
      <section>
        <h2>Ala renderoi olioita</h2>
        <p>
          Ensimmainen ystavat {friends[0].name} on {friends[0].age}vuotta vanha.
        </p>
        <p>
          Toinen ystavat {friends[1].name} on {friends[1].age}vuotta vanha.
        </p>
      </section>
    </>
  );
};

const Footer = (props) => {
  return (
    <>
      <footer>
        <hr />
        greetings app created by{" "}
        <a href="https://github.com/Miamura">Fethi Abali</a>
      </footer>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Hello from komponetti");
  const nimi = "Pekka";
  const ika = 10;
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Anni", age: 45 },
  ];

  return (
    <>
      <section>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </section>

      <section className="Greetings">
        <h1>Greetings</h1>
        <Hello name="Heikki" town="Helsinki" age="15" />
        <Hello name="Pekka" town="Oulu" age={16 + ika} />
        <Hello name={nimi} town="Oulu" age={ika} />
      </section>

      <section>
        <Ystavat friends={friends} />
      </section>

      <section>
        <hr />
        <Footer />
      </section>
    </>
  );
};

export default App;
