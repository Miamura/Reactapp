const Hello = () => {
  return (
    <>
      <p>Hello World</p>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Hello from komponetti");
  return (
    <>
      <section>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </section>
      <section>
        <h1>Greetings</h1>
        <Hello />
      </section>
    </>
  );
};

export default App;
