import React from "react";

const Blogs = () => {
  return (
    <div className="p-7 text-left text-white">
      <h2 className="my-3 text-2xl font-medium">
        Difference between javascript and nodejs?
      </h2>
      <h5 className="p-3 text-lg">
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine. Whereas Node JS is an interpreter or running
        environment for a JavaScript programming language that holds many
        excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use.
      </h5>
      <h5 className="p-3 text-lg">
        On the other hand, authorization is the process of verifying what
        specific applications, files, and data a user has access to.
        Authorization in system security is the process of giving the user
        permission to access a specific resource or function.
      </h5>
      <h2 className="my-3 text-2xl font-medium">
        When should you use nodejs and when should you use mongodb?
      </h2>
      <h5 className="p-3 text-lg">
        Node JS by default follows the Asynchronous pattern. That why it does
        not need to wait for a task to be completed. In the meantime, NodeJS
        started another job. That’s why we use nodeJS.
      </h5>
      <h5 className="p-3 text-lg">
        MongoDB is the Document Oriented Database. MongoDB stores a lot of data
        in JSON format. MongoDB is designed to work with Large Scale Data.
        MongoDB can work on multiple servers. MongoDB can handle a large number
        of access requests easily.
      </h5>
      <h2 className="my-3 text-2xl font-medium">
        Differences between SQL and NoSQL databases?
      </h2>
      <h5 className="p-3 text-lg">
        The five critical differences between SQL vs NoSQL are:
        <li>
          SQL databases are relational, NoSQL databases are non-relational.
        </li>
        <li>
          SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </li>
        <li>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </li>
        <li>
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
        </li>
        <li>
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </li>
      </h5>
      <h2 className="my-3 text-2xl font-medium">
        What is the purpose of jwt and how does it work?
      </h2>
      <h5 className="p-3 text-lg">
        Purpose of JWT : JWTs are a good way of securely transmitting
        information between parties because they can be signed, which means you
        can be sure that the senders are who they say they are. Additionally,
        the structure of a JWT allows you to verify that the content hasn't been
        tampered with.
      </h5>
      <h5 className="p-3 text-lg">
        How JWT Works JWTs differ from other web tokens in that they contain a
        set of claims. Claims are used to transmit information between two
        parties. What these claims are depends on the use case at hand. For
        example, a claim may assert who issued the token, how long it is valid
        for, or what permissions the client has been granted. <br />
        <p>
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
        </p>
        <br />
        <p>Once decoded, you will get two JSON strings:</p>
        <li>The header and the payload.</li>
        <li>The signature.</li>
        <br />
        <p>
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm.
        </p>
        <br />
        <p>
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting.
        </p>
        <br />
        <p>
          There are no mandatory claims for a JWT, but overlaying standards may
          make claims mandatory. For example, when using JWT as bearer access
          token under OAuth2.0, iss, sub, aud, and exp must be present. some are
          more common than others.
        </p>
        <br />
        The signature ensures that the token hasn’t been altered. The party that
        creates the JWT signs the header and payload with a secret that is known
        to both the issuer and receiver, or with a private key known only to the
        sender. When the token is used, the receiving party verifies that the
        header and payload match the signature.
      </h5>
    </div>
  );
};

export default Blogs;
