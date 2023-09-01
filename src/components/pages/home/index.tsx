import React, { useEffect, useState } from "react";
import Logout from "../logout";
import Navbar from "../navbar";
import { RootState, useAppSelector } from "../../../redux/store";
import axios from "axios";
import CardComponent from "../../sharedComponents/cardCharacter";
import styles from "./home.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  const { authUser: token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const headers = {
      token: token.token,
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}api/characters/`,
          { headers }
        );
        setData(response?.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {data.map((data) => (
          <CardComponent data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
