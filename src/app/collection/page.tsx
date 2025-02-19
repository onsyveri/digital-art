"use client";
import { useEffect, useState } from "react";
import styles from "./collection.module.css";


type Art = {
  title: string;
  name: string;
  image: string;
};

export default function Collection() {
  const [data, setData] = useState<Art[]>([]);
  const basePath = process.env.NODE_ENV === "production" ? "/digital-art" : "";

  useEffect(() => {
    fetch(`${basePath}/art-collection.json`) // Husk å lagre JSON-filen i public/
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Feil ved lasting av data:", error));
  }, []);

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Collection</h1>
    <div className={styles.grid}>
      {data.map((art, index) => (
        <div key={index} className={styles.card}>
          <img src={art.image} alt={art.name} />
          <h2>{art.title}</h2>
          <p>{art.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
