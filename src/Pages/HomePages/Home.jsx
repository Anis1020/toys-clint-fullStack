import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bgImg from "../../assets/bgimg.jpg";
import { Link } from "react-router-dom";
import MarvelCategory from "./MarvelCategory";
import Avengers from "./Avengers";
import Transformers from "./Transformers";

const Home = () => {
  const [marvelCategory, setMarvelCategory] = useState([]);
  const [avengers, setAvengers] = useState([]);
  const [transformers, setTransformer] = useState([]);
  const [photos, setPhotos] = useState(true);

  const url = "https://assignment-11-server-site-kappa.vercel.app/alltoys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.map((d) => d?.photo));
        const cate = data.filter((dat) => dat.category == "marvel");

        setMarvelCategory(cate);
      });
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const cate = data.filter((dat) => dat.category == "avengers");

        setAvengers(cate);
      });
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const cate = data.filter((dat) => dat.category == "transformers");

        setTransformer(cate);
      });
  }, []);

  return (
    <div className="">
      <img className="my-4 w-full h-96 object-cover " src={bgImg} alt="" />
      {/* //relative bottom-64 bg-zinc-700 ms-4 text-2xl p-4 w-4/12 bg-opacity-25 */}
      <div className="-mt-64   ms-4 text-2xl p-4 w-4/12 bg-opacity-25">
        <h2>Action Toys are available now</h2>
        <small>
          we are providing qualitiful action toys and we love to say that this
          is the best toy all over the market
        </small>{" "}
        <br />
        <Link to="registration">
          <button className="btn btn-accent mt-2">Sign Up Now</button>
        </Link>
      </div>
      {/* tab section here */}
      <div className="my-16 text-center space-y-10">
        <h3 className="text-2xl ">Shop By Category</h3>
        <Tabs>
          <TabList>
            <Tab>marvel</Tab>
            <Tab>avengers</Tab>
            <Tab>transformers</Tab>
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-5">
              {marvelCategory.map((category) => (
                <MarvelCategory
                  key={category._id}
                  category={category}
                ></MarvelCategory>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-5">
              {avengers.map((avenger) => (
                <Avengers key={avenger._id} avenger={avenger}></Avengers>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-5">
              {transformers.map((transformer) => (
                <Transformers
                  key={transformer._id}
                  transformer={transformer}
                ></Transformers>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* customer review section */}

      <div>
        <h3 className="text-3xl text-center">photos gallery</h3>
        <div className="carousel w-full h-96 my-8">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={photos[0]} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={photos[1]} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={photos[2]} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={photos[3]} className="w-full  object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
