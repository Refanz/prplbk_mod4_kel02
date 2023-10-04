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
            <Typography variant="h4">
                    Tugas Modul 4 Kelompok 2
                </Typography>

                <TextField id="outlined-basic" label="Cari user.." variant="outlined" size="small" margin="normal"
                           onChange={searchUserByName}/>

                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginY: 3}}>
                    </List>
            </div>

        </>
    )
}

export default App
