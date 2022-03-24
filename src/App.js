import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import Playlist from "./routes/playlist/Playlist";
import Search from "./routes/search/Search";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}>
            {/* NEST ALBUMS */}
        </Route>
          <Route path="playlists" element={<Playlist />} />
          <Route path="search" element={<Search />} />
      </Routes>
    </Layout>


  );
}

export default App;
