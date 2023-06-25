import React from "react";
import axios from "axios";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // Sample data, you can replace it with actual data from an API
    };
  }

  componentDidMount() {
    // Fetch users data from the backend API
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminDashboard;
