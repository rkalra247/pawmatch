import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.landing_page}>
        <div className={styles.container}>
          <div className={styles.header_area}>
            <div className={styles.logo}>
              <b>PawMatch</b>
            </div>
            <ul className={styles.links}>
              <li>Home</li>
              <li>About Us</li>
              <li>
                <Link
                  href="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <h1>#AdoptDontShop</h1>
            <p>
              We help individuals with pet adoptions, pet rehoming and organizaing rescue operations.The ultimate goal is to help reduce the amount of euthanisia rates that occur
              due to lack of space. We hope to raise awareness and recruit more like minded individuals for our movement as we learn and grow further in our journey. 
            </p>
            <button>Read More</button>
          </div>
          <div className={styles.image}>
            <img src="https://media.istockphoto.com/id/1217408094/photo/stray-beautiful-dog-lean-out-from-cage-and-looking-at-human-dog-abandoned-in-shelter-and.jpg?s=612x612&w=0&k=20&c=TnnfM4WkFORNsK02MKNyji_QJbExT2JhjySXE1ByTyI="></img>
          </div>
        </div>
      </div>
    </>
  );
}
