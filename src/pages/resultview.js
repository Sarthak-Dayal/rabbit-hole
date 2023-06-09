/** @format */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [resultsPage, setResultsPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  {/*TODO: SET UP STATE AND FUNCTIONS
  * get paper function
  * get references function
  * update functions for graph if needed
  * all different states from mit ai2
  */}
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/search?query=${searchQuery}&fields=title,authors,year,abstract`
    );
    const data = await response.json();

    setSearchResults(data.data);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <h3>{"Home>Loading"}</h3>
          <div>
            <button>{"Back"}</button>
            <h1>{"Paper title"}</h1>
            <p>Abstract: </p>
            <button>Read</button>
            <h2>Reference graph:</h2>
            {/*TODO: FIND GRAPH LIBRARY AND MAKE GRAPH HERE*/}
          </div>
        </div>
      </main>
    </>
  );
}
