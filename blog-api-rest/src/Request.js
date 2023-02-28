import React from "react";
import axios from "axios";
const peticiones = () => {
  function getAllRequest() {
    axios
      .get("https://jsonplaceholder.typicode.com/")
      .then(function (response) {
        console.log(response);
        console.log("exitoso");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});

    console.log("getAllRequest");
  }
  function getFilteredRequest() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("getFilteredRequest");
  }
  function getByIdRequest() {
    let id = 1;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("getByIdRequest");
  }
  function postRequest() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("postRequest");
  }
  function putRequest() {
    let id = 1;
    axios
      .put("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("putRequest");
  }
  function patchRequest() {
    let id = 1;
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("patch");
  }
  function deleteRequest() {
    let id = 1;
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    console.log("borrar");
  }
  return (
    <div>
      <div>
        <button onClick={getAllRequest}>Get All</button>
        <button onClick={getFilteredRequest}>Get Filtered</button>
        <button onClick={getByIdRequest}>Get by Id</button>
      </div>
      <div>
        <button onClick={postRequest}>postRequest</button>
      </div>
      <div>
        <button onClick={patchRequest}>patchRequest</button>
      </div>
      <div>
        <button onClick={putRequest}>putRequest</button>
      </div>
      <div>
        <button onClick={deleteRequest}>Delete</button>
      </div>
    </div>
  );
};
export default peticiones;
