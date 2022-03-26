import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import Playlist from "./routes/playlist/Playlist";
import Search from "./routes/search/Search";
import Album from "./routes/album/Album";
import Artist from "./routes/artist/Artist"
import Error from "./components/Error";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/react-music-app" index element={<Home />} />
        <Route path="/react-music-app/playlists" element={<Playlist />} />
        <Route path="/react-music-app/search" element={<Search />} />
        <Route path="/react-music-app/album/:id" element={<Album />} />
        <Route path="/react-music-app/artist/:id" element={<Artist />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>


  );
}

export default App;
