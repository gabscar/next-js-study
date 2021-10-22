import classes from './profile-form.module.css';
import {useRef} from 'react'
function ProfileForm() {
  const newPasswordInputRef = useRef()
  const oldPasswordInputRef = useRef()
  async function submithandler(evt){
    evt.preventDefault();
    const valueNewPassword = newPasswordInputRef.current.value;
    const valueOldPassword = newPasswordInputRef.current.value;

    const response = await fetch('/api/user/change-password',{
      method: 'PATCH',
      body: JSON.stringify({ oldPassword:valueOldPassword,
                             newPassword:valueNewPassword}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
    console.log(data)

  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref = {newPasswordInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref = {oldPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
