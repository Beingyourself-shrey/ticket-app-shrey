import { useState } from "react";
import {TextField,Button} from '@mui/material'
function BookNew(props) {
    const [user, setUser] = useState({ username: "", email: "", phone: "" })
    let changehandler = (e) => {
        let userCopy = { ...user }
        let value = e.target.value;
        let name = e.target.name;
        switch (name) {
            case 'username':
                userCopy[name] = value
                break;
            case 'email':
                userCopy[name] = value
                break;
            case 'phone':
                userCopy[name] = value
                break;
            default:
                break;
        }

        setUser(userCopy)
    }
    let submitHandler=(e)=>{
        e.preventDefault();
        let objToSend={...user,key:props.selected.key,day:props.selected.day,slot:props.selected.slot}
        props.book(objToSend)
    }
    return (<div>
        <form>
            <div className="form-group">
                <TextField className="input" 
                    name="username"
                    required={true}
                    type="text"
                    placeholder="Input username"
                    onChange={changehandler}
                    value={user.userName} />
            </div>
            <div className="form-group">
                <TextField className="input"
                    name="email"
                    required={true}
                    type="email"
                    placeholder="Input Email"
                    onChange={changehandler}
                    value={user.email} />
            </div>
            <div className="form-group">
                <TextField className="input"
                    name="phone"
                    type="text"
                    required={true}
                    placeholder="Input Phone Number"
                    onChange={changehandler}
                    value={user.phone} />
            </div>
            <div className="form-group text-center">
              <Button 
              onClick={submitHandler}
              variant="contained"  
              disabled={!user.username || !user.phone || !user.email}
              >
                  Submit
              </Button>
            </div>
        </form>
    </div>);
}

export default BookNew;