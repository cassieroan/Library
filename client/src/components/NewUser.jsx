import { useState } from "react";
import { createUser } from "../fetching";

export default function NewUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // formSubmitState is one of { status: 'unsubmitted' }, { status: 'sending' }, or
  // { status: 'completed', userId: number } 
  const [formSubmitState, setFormSubmitState] = useState({ status: 'unsubmitted' });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setFormSubmitState({ status: 'sending' });
    const result = await createUser({username, email, role});
    // at this point, result is { userId: number, username: string, email: string, role: string}
    setFormSubmitState({ status: 'completed', userId: result.userId })
  };

  if (formSubmitState.status === 'completed') {
    return (
      <center>
        <h1>Thanks for joining!</h1>
        <h3>Your ID # is</h3>
        <h2 style={{ color: 'red' }}>{formSubmitState.userId}</h2>
      </center>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Add new user</h1>
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
                type="text" id="username"
                value={username} onChange={evt => setUsername(evt.target.value)}
              />
            </div>
          </div>
          
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                type="email" id="email"
                value={email} onChange={evt => setEmail(evt.target.value)}
              />
          </div>
          </div>

          <div>
            <div>
              <label htmlFor="role">Role</label>
            </div>
            <div>
              <select id="role" value={role} onChange={evt => setRole(evt.target.value)}>
                <option value="user">User</option>
                <option value="librarian">Librarian</option>
              </select>
            </div>
          </div>
          
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  )
}