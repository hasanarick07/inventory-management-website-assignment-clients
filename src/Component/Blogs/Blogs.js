import React from "react";

const Blogs = () => {
  return (
    <div className="p-7 text-left text-white">
      <h2 className="my-3 text-2xl font-medium">
        Difference between Authorization and Authentication?
      </h2>
      <h5 className="p-3 text-lg">
        Authentication is the process of verifying who am I or who are you or
        who is the user or person.Authentication is the act of validating that
        users are whom they claim to be. This is the first step in any security
        process.
      </h5>
      <h5 className="p-3 text-lg">
        On the other hand, authorization is the process of verifying what
        specific applications, files, and data a user has access to.
        Authorization in system security is the process of giving the user
        permission to access a specific resource or function.
      </h5>
      <h2 className="my-3 text-2xl font-medium">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <h5 className="p-3 text-lg">
        To implement user authentication on my website or app.
      </h5>
      <h5 className="p-3 text-lg">
        There are many options for implementing authentication like firebase.
        Here are some of those : <li>Auth0</li>
        <li>MongoDB</li>
        <li>Passport</li>
        <li>Okta</li>
        <li>Amazon Cognito</li>
      </h5>
      <h2 className="my-3 text-2xl font-medium">
        What other services does firebase provide other than authentication?
      </h2>
      <h5 className="p-3 text-lg">
        There are many services which Firebase provides, Most useful of them
        are:
        <li>Cloud Firestore</li>
        <li>Cloud Functions</li>
        <li>Authentication</li>
        <li>Hosting</li>
        <li>Cloud Storage</li>
        <li>Google Analytics</li>
        <li>Predictions</li>
        <li>Cloud Messaging</li>
        <li>Dynamic Links</li>
        <li>Remote Config.</li>
      </h5>
    </div>
  );
};

export default Blogs;
