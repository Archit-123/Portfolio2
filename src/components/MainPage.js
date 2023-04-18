import React from "react";
import Header from "./Header";
// import Footer from "./Footer";

import "./MainPage.css";
import { useState } from "react";

function MainPage() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div>
      <Header />
      <div className="mainPage">
        <div className="home" id="home">
          <div className="hello">Hello, I'm</div>
          <div className="myname">Archit Mallick</div>
          <div className="myintro">AND THIS IS MY PORTFOLIO</div>
        </div>
        <div className="featured-portfolio" id="portfolio">
          <h1>Featured Portfolio</h1>
          <div className="mywork">
            <div className="work-details" onClick={() => setActiveTab("web")}>
              Web Designs
            </div>
            <div className="work-details" onClick={() => setActiveTab("game")}>
              Game Designs
            </div>
            <div className="work-details" onClick={() => setActiveTab("3d")}>
              3D Designs
            </div>
            <div className="work-details" onClick={() => setActiveTab("anim")}>
              3D Animations
            </div>
          </div>
          <div className="detailed-work">
            {/* Web Designs */}
            {activeTab === "web" && (
              <div className="child-web-designs">
                <div className="websD">Hekto</div>
                <div className="websD">Portfolio</div>
                <div className="websD">Online Food Store</div>
                <div className="websD">z-Chat App(SocketIO)</div>
              </div>
            )}

            {/* Game Designs */}
            {activeTab === "game" && (
              <div className="child-game-designs">
                <div className="gameD">Cubing</div>
                <div className="gameD">Tic Tac Toe</div>
              </div>
            )}

            {/* 3D Designs */}
            {activeTab === "3d" && (
              <div className="child-3D-designs">
                <div className="design3d">M9 Bayonet Knife</div>
                <div className="design3d">Executioner Blade</div>
                <div className="design3d">Lowpoly 3D World</div>
                <div className="design3d">Minato Kunai</div>
              </div>
            )}

            {/* 3D Animations */}
            {activeTab === "anim" && (
              <div className="child-3D-anim">
                <div className="anim3d">Crab Creature Walk</div>
                <div className="anim3d">Disappearing Monkey Head</div>
                <div className="anim3d">2D Hand Rasengan</div>
              </div>
            )}
          </div>
          <div className="resume" id="resume">
            <h1>
              My <span>RESUME</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default MainPage;
