import React from "react";

const Blog = () => {
  return (
    <div className="bg-yellow-400 py-4 my-8">
      <div className="bg-green-500 text-black rounded p-8 m-10">
        <h2>
          Q.1 What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          Answer. an access token is a credential that provided by a
          authorization server it help to securer our user credential and access
          token we can give limited time validation after that time it will not
          work , on the other hand refresh token help to generate new access
          token. <br /> 1. access token work give us a credential which is store
          in local storage or http only coocki it is help to secure our api and
          user credential
        </p>
      </div>
      <div className="bg-green-500 text-black rounded p-8 m-10">
        <h2>Q.2 Compare SQL and NoSQL databases?</h2>
        <p>
          <strong>Answer</strong>. 1.Data Model: <strong>SQL</strong> follow a
          structured data model like tabular formate like row colum and also
          follow a schema structure <br />
          <strong>on the other handNo SQL </strong> dos't follow any structure
          you can stor a data many formate like property, array, document etc.
          it has more flexibility then sql
        </p>
      </div>
      <div className="bg-green-500 text-black rounded p-8 m-10">
        <h2>Q.3 What is express js? What is Nest JS (google it)?</h2>
        <p>
          <strong>Answer</strong>. Node js is a runtime of express js , it help
          to developer to define http router, it is a popular framework of node
          js. by thr help of it we can make easily api route <br />
          <strong>on the other handNo Nest.js </strong> is also a framework but
          it is heavily inspire of angular js, id is also a node js framework ,
          and it is support for typescript
        </p>
      </div>
      <div className="bg-green-500 text-black rounded p-8 m-10">
        <h2>Q.4 What is MongoDB aggregate and how does it work (google it)?</h2>
        <p>
          <strong>Answer</strong>. mongodb is a database by the help of this we
          can stor our data it work base on some concept such as <br />
          <strong>Pipeline concept</strong> Aggregations in MongoDB are
          performed using a concept called a pipeline.
          <strong>Stage</strong> Some comonly use stage are <br />
          $match, sort, limit, group , project, by those stage we can do many
          operation very easily
        </p>
      </div>
    </div>
  );
};

export default Blog;
