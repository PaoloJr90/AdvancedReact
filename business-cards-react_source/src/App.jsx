import Card from "./components/Card";
import Searcher from "./components/Seacher";
import { usersData } from "./common/userData";
import { useState } from "react";

function App() {
  const [searchedUsers, setSearchedUsers] = useState(usersData);

  return (
    <div className="container">
      <br />
      <Searcher
        searchedUsers={searchedUsers}
        setSearchedUsers={setSearchedUsers}
      />
      <h1>Business Cards:</h1>
      <div className="wrapper">
        {usersData.length === 0 && "Looks like you don't have the cards..."}
        {searchedUsers.map((user, index) => {
          return (
            <Card
              key={`user-${index}`}
              name={user.name}
              position={user.position}
              phone={user.phone}
              email={user.email}
            />
          );
        })}
        <p
          className="message"
          style={{ display: "none", color: "red", margin: "10px" }}
        >
          There's no business card any more
        </p>
      </div>
    </div>
  );
}

export default App;
