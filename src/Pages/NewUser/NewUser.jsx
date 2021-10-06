import "./NewUser.css";

export const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Passwordc</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" className="newUserSelect" id="active">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button className="newUserButton"> Create</button>
      </form>
    </div>
  );
};
