import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { Card } from "../../components";
import "./UserList.scss";

function UserList() {
  const [userList, setUserList] = useState()

  const getUsers = () => {
    axios
      .get(
        "https://assets.interviewhelp.io/INTERVIEW_HELP/reactjs/users.json",
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then( (res)=> {
        setUserList(res.data);
        console.log(res.data);
      })
      .catch( (err)=> {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="user-list-wrapper">
    <Row gutter={[25, 25]}>
      {userList?.map((user,ind) => {
        
        return (
          <Col key={user.id} xs={24} sm={12} md={8}  >
            <Card data={user} />
        </Col>
          )
        })}
    </Row>
        </div>
  );
}

export default UserList;
