import logo from "./logo.svg";
import "./App.css";
import AudioPlayer from "./AudioPlayer";

function App() {
  // const bookmarks = [{ time: 50 }];

  // return (
  //   <div className="App">
  //     <AudioPlayer
  //       source="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
  //       bookmarks={bookmarks}
  //     />
  //   </div>
  // );
  const source =
    "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3";
  const bookmarks = [
    { time: 10 },
    { time: 20 },
    { time: 30 },
    { time: 40 },
    { time: 50 },
    { time: 60 },
    { time: 70 },
    { time: 80 },
    { time: 90 },
    { time: 100 },
  ];
  const startTime = 20;
  const endTime = 45;

  return (
    <AudioPlayer source={source} endTime={endTime} startTime={startTime} />
    // <AudioPlayer />
  );
}

export default App;
