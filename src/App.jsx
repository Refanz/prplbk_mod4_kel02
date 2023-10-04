import {useEffect, useState} from 'react'
import './App.css'
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";

function App() {

    const [users, setUsers] = useState(["Khasandra", "Didan", "Refan", "Baihaqi"]);

    const [searchUser, setSearchUser] = useState("");
    
    function searchUserByName(event) {
      setSearchUser(event.target.value);

      console.log(searchUser);
  }
    return (
        <>
            <div>

            </div>

        </>
    )
}

export default App
