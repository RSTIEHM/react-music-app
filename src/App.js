import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import Playlist from "./routes/playlist/Playlist";
import Search from "./routes/search/Search";
import Album from "./routes/album/Album";
import Error from "./components/Error";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playlists" element={<Playlist />} />
        <Route path="search" element={<Search />} />
        <Route path="album/:id" element={<Album />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>


  );
}

export default App;
