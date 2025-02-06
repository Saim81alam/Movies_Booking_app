import React from "react";
// import "./App.css";
import MoviesPage from "./commponent/MoviesPage";
import MoviesDetails from "./commponent/MoviesDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./commponent/Form";

function App() {
  const MoviesList = [
    {
      id: 1,
      title: "KGF CHAPTER 1",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/149ac783c0e32bfecd62d2d447b5c36d304d5a5afe30db4d701dc93dc8bba5b0.jpg",
      details:
        "Rocky's Mother:- If you gain courage because a thousand people are standing behind you, then you can win only one war.",
    },
    {
      id: 2,
      title: "KGF CHAPTER 2",
      image: "https://static.toiimg.com/photo/90518208.cms",
      details:
        "Rocky : Violence, Violence, Violence, I don't like it, I Avoid... . but Violence likes me, I can't Avoid.",
    },
    {
      id: 3,
      title: "PROJECT 24",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/02/18/1600x900/Project_K_1676700708297_1676700708506_1676700708506.jpg",
      details: "in this movie a scientist make time travelling watch.",
    },
    {
      id: 4,
      title: "MARCO",
      image: "https://i.ytimg.com/vi/RWGAOhzQDz0/maxresdefault.jpg",
      details:
        "The film received well critical acclaim from both critics and audience alike, and emerged as the highest-grossing A-rated Malayalam film of all-time,",
    },
    {
      id: 5,
      title: "LEO",
      image:
        "https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfAjTWV_un8QDeuY6BOHfenHF5tL3Jf4e9HiVapqaznk2WmVuB36GxTCCIOvjKgPMi9EVm7YhFwA2_rn7f8sMPhJdC_O1rBG57ka.jpg?r=c57",
      details:
        "The film received well critical acclaim from both critics and audience alike, and emerged as the highest-grossing A-rated Malayalam film of all-time,",
    },
    {
      id: 6,
      title: "BAHUBALI",
      image:
        "https://wallpapers.com/images/hd/prabhas-in-bahubali-ik4trnhyq3dgv91h.jpg",
      details:
        "The film received well critical acclaim from both critics and audience alike, and emerged as the highest-grossing A-rated Malayalam film of all-time,",
    },
    {
      id: 7,
      title: "KALKI",
      image: "https://i.ytimg.com/vi/y1-w1kUGuz8/maxresdefault.jpg",
      details:
        "The film received well critical acclaim from both critics and audience alike, and emerged as the highest-grossing A-rated Malayalam film of all-time,",
    },
    {
      id: 8,
      title: "KAALA",
      image:
        "https://c4.wallpaperflare.com/wallpaper/952/216/876/hindi-kaala-karikaalan-rajnikanth-telugu-wallpaper-preview.jpg",
      details:
        "The film received well critical acclaim from both critics and audience alike, and emerged as the highest-grossing A-rated Malayalam film of all-time,",
    },
  ];

  return (
    <center>
      {" "}
      <h1>Movies Booking</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MoviesPage MoviesList={MoviesList} />} />
          <Route path="/next" element={<MoviesDetails />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </center>
  );
}

export default App;
