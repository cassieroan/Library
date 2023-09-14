import { useState } from "react";
import { logInUser } from "../fetching";
import { Link } from "react-router-dom";


export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // formSubmitState is one of { status: 'unsubmitted' }, { status: 'sending' }, or
  // { status: 'completed', userId: number } 
  const [formSubmitState, setFormSubmitState] = useState({ status: 'unsubmitted' });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setFormSubmitState({ status: 'sending' });
    await logInUser({ username, password });
    // at this point, result is { userId: number, username: string, email: string, role: string}
    setFormSubmitState({ status: 'completed' })
  };

  if (formSubmitState.status === 'completed') {
    return (
      <center>
        <h1>Log In Successful</h1>
      </center>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Log In</h1>
      <form onSubmit={handleSubmit} style={{
        margin: 'auto',
        maxWidth: 300
      }}>
        <fieldset disabled={formSubmitState.status === 'sending'}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input
                type="text" id="username" autoFocus
                value={username} onChange={evt => setUsername(evt.target.value)}
              />
            </div>
          </div>
          
          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input
                type="password" id="password"
                value={password} onChange={evt => setPassword(evt.target.value)}
              />
            </div>
          </div>
          
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <h4  style={{textAlign: 'center'}}><a href="/users/new" >Don't have an account? Create one here.</a></h4>
    </div>
  )
}