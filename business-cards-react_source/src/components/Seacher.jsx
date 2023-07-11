import { Component, useContext, useEffect,useState } from "react";
import CardsContext from "./CardsContext";

function Searcher()  {

    const {searchedUsers, updatedCardList} = useContext(CardsContext);
    const {users, setUsers} = useContext(CardsContext);
    const [searchData, setSearch] = useState("");

    useEffect(() => {
      const searchText = searchData.toLowerCase();
      const newUsers = users?.filter((user) => {
        const fullName = `${user.name}`;
        if (
          fullName
            .toLowerCase()
            .replace(" ", "")
            .includes(searchText.replace(" ", ""))
        ) {
          return true;
        }
        return false;
      });
      updatedCardList(newUsers);
    },[searchData])

    return (
      <div>
        <input
          placeholder="Please type name to filter..."
          type="text"
          style={{
            width: "33%",
            fontSize: "1.25rem",
            minHeight: "2.0rem",
            marginBottom: "1.5rem",
            marginRight: "1.5rem",
          }}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <label>Sort </label>
        <button
          className="card__btn"
          style={{ color: "blue" }}
          type="button"
          onClick={() => {
            const sortedUsers = searchedUsers?.sort(
              (user1, user2) => {
                const name1 = user1.name.toLowerCase();
                const name2 = user2.name.toLowerCase();

                if (name1 < name2) {
                  return -1;
                } else if (name1 > name2) {
                  return 1;
                } else {
                  return 0;
                }
              }
            );
            updatedCardList(sortedUsers);
          }}
        >
          {" "}
          Ascending
        </button>
        <button
          className="card__btn"
          style={{ color: "blue" }}
          type="button"
          onClick={() => {
            const sortedUsers = searchedUsers?.sort(
              (user1, user2) => {
                const name1 = user1.name.toLowerCase();
                const name2 = user2.name.toLowerCase();

                if (name1 < name2) {
                  return 1;
                } else if (name1 > name2) {
                  return -1;
                } else {
                  return 0;
                }
              }
            );
            updatedCardList(sortedUsers);
          }}
        >
          {" "}
          Descending
        </button>
      </div>
    );
}

export default Searcher;
