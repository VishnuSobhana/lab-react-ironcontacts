import "./App.css";
import contactsDB from "./contacts.json";
import React, { useState } from "react";
function App() {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5));

  /*
const contacts = contactsDB.slice(0, 5)  WRONG!

contacts  => your initial state  (the name of the variable)

setContacts => a function to change the initial state

useStates(contactsDB.slice(0, 5))  => this is the value of your initial state (the value of your variable contacts)


*/

  const handleAddRandomContacts = () => {
    const randomContact =
      contactsDB[Math.floor(Math.random() * contactsDB.length)]; // A ) you are getting a random element from the contacts Data Base
    const copy = [...contacts]; // B ) you are creating a copy array of the contacts
    copy.push(randomContact); // C ) you are pushing the random contact that you got on A) to the new array that you crated on B)

    /*
before the setContacts the value of contacts is contactsDB.slice(0, 5)

after the setContacts the value of contacts (please note that the varial name is the same!) is your new array copy!

    */
    setContacts(copy);
  };
  const handleSortByPopularity = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.popularity - b.popularity);
    setContacts(copy);
  };
  const handleSortByName = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  };
  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  };

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={handleAddRandomContacts}>Add Random Contacts</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>won an oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((element) => (
            <tr>
              <td>
                <img src={element.pictureUrl} height="59" />
              </td>
              <td> {element.name}</td>
              <td> {element.popularity}</td>
              <td>{element.wonOscar ? "🏆" : " "}</td>
              <td> {element.wonEmmy ? "🏆" : " "}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(element.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
