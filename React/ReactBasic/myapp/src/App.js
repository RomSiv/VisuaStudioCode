import "./App.css";
import User from "./components/User";

function App() {
  const users = [
    {
      id: 1,
      firstname: "Vova",
      lastname: "Zimnikoff",
      age: 50,
    },
    {
      id: 2,
      firstname: "Valera",
      lastname: "Petroff",
      age: 34,
    },
    {
      id: 3,
      firstname: "Anna",
      lastname: "Gorelova",
      age: 17,
    },
    {
      id: 4,
      firstname: "Ilona",
      lastname: "Kolumova",
      age: 35,
    },
  ];

  return (
    <div>
      {
      users
      .filter(el => el.age >= 18)
      .map((el) => (
        <User firstname={el.firstname} lastname={el.lastname} age={el.age} key={el.id} />
      ))}
    </div>
  );
}

export default App;
