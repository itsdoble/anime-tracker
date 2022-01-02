import React, { useContext, useState } from "react";
import Context from "../context";

const Profile = () => {
  const [tips, setTips] = useState(["hidden", "Show", "fa-eye"]);
  const ctx = useContext(Context);
  const changeName = (e) => {
    ctx.setName(e.target.value);
    window.localStorage.setItem("name", e.target.value);
  };
  const deleteData = () => {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("pic");
    window.location.reload();
  };
  const updatePicture = (e) => {
    ctx.setPic(process.env.PUBLIC_URL + "/media/loading.gif");
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "jo8zfyrw");
    console.log(e.target.files[0]);
    fetch("https://api.cloudinary.com/v1_1/dobl33/image/upload", {
      method: "POST",
      body: formdata,
    })
      .then((data) => data.json())
      .then((data) => {
        ctx.setPic(data.secure_url);
        window.localStorage.setItem("pic", data.secure_url);
      })
      .catch((e) => console.log(e.message));
  };
  const hideShowTips = () => {
    if (tips[0] === "block") {
      setTips(["hidden", "Show", "fa-eye"]);
    } else {
      setTips(["block", "Hide", "fa-eye-slash"]);
    }
  };
  return (
    <div className="w-full h-full relative">
      <form className="w-full h-full flex flex-col justify-center items-center pb-32">
        <label htmlFor="pic">
          <img
            className="min-h-[10rem] h-[10rem] aspect-square object-cover rounded-full m-auto outline outline-pink-500 "
            src={ctx.pic}
            alt="profile pic"
          />
        </label>
        <input
          type="file"
          accept="image/jpeg, image/png"
          className="hidden"
          id="pic"
          onChange={updatePicture}
        />

        <input
          type="text"
          id="name"
          className="outline-none h-12 m-4 bg-pink-50 text-pink-500 text-center text-4xl font-semibold font-lico"
          value={ctx.name}
          onChange={changeName}
        />
        <button
          type="button"
          className="bg-red-500 text-white p-2 rounded-lg"
          onClick={deleteData}
        >
          Clear Data
        </button>
      </form>
      <div className="absolute bottom-2 left-[calc(100vw_-_97.5%)] w-[95%] p-2 bg-pink-100 outline outline-1 rounded-md">
        <p onClick={hideShowTips} className="text-center">
          <i className={"mr-1 fas " + tips[2]}></i>
          {tips[1]} tips
        </p>
        <div className={tips[0]}>
          <hr className="w-full h-[1px] bg-gray-800" />
          <h2>Tips:</h2>
          <ol className="list-outside list-decimal">
            <li className="ml-6">Click on the picture/name to change them.</li>
            <li className="ml-6">Use a square image for best results.</li>
            <li className="ml-6">
              Only capitalize the first letter of your name.
            </li>
            <li className="ml-6">
              Click the "Clear Data" button to reset your data.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Profile;
