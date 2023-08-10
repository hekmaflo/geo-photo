import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hector Flores",
      image:
        "https://images.pexels.com/photos/17576069/pexels-photo-17576069/free-photo-of-diving-under-water-freediving-underwater-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 3,
    },
    {
      id: "u2",
      name: "Eric Lugo",
      image:
        "https://images.pexels.com/photos/17576069/pexels-photo-17576069/free-photo-of-diving-under-water-freediving-underwater-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
