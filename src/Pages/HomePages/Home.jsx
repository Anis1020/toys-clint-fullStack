import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bgImg from "../../assets/bgimg.jpg";

const Home = () => {
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
        <button className="btn btn-accent mt-2">Buy Now</button>
      </div>
      {/* tab section here */}
      <div className="my-16 text-center space-y-10">
        <h3>Sub-category</h3>
        <Tabs>
          <TabList>
            <Tab>marvel</Tab>
            <Tab>avengers</Tab>
            <Tab>transformers</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
