import logo from "./logo.svg";
import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { BlogPost as BlogPostModel, User } from "./models";
import { BlogDesktop } from "./ui-components";
import { useEffect, useState } from "react";

function App() {
  const [models, setModels] = useState([]);
  const [users, setUsers] = useState([]);
  const getModels = async () => {
    const models = await DataStore.query(BlogPostModel);
    console.log(models);
    setModels(models);
  };
  const getUsers = async () => {
    const users = await DataStore.query(User);
    console.log(users);
    setUsers(users);
  };
  useEffect(() => {
    getModels();
    getUsers();
  }, []);
  const blogList = models.map((model) => {
    const user = users.find((user) => user.id === model.userID);
    console.log(user);
    return user ? (
      <BlogDesktop user={user} blogPost={model} key={model.id} />
    ) : (
      <div key={model.id}>Loading...</div>
    );
  });
  return <>{blogList}</>;
}

export default App;
