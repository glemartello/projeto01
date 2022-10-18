import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Glenda Martello"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea velit iure iste beatae hic aspernatur reiciendis aliquid amet saepe atque, porro dolor cumque voluptatem assumenda! Dignissimos ipsa dolores maiores."
          />
          <Post
            author="Alexandre Stapenhorst"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea velit iure iste beatae hic aspernatur reiciendis aliquid amet saepe atque, porro dolor cumque voluptatem assumenda! Dignissimos ipsa dolores maiores."
          />
        </main>
      </div>
    </div>
  );
}
