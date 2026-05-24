import { useState } from "react";
import { useDispatch } from "react-redux";
import { searcUsers } from "../redux/github/GithubSlice";
import { toast } from "react-toastify";

const SearchUsers = () => {
  const [userText, setUserText] = useState("");
  const dispatch = useDispatch();

  const searchFieldValue = () => {
    console.log(userText)
    dispatch(searcUsers(userText));
  };

  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 pt-6 lg:pt-6">
      <input
        className="border border-gray-500 w-full mt-4 p-2"
        type="text"
        name="search"
        placeholder="Enter Username"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />

      <button
            className="bg-black w-full text-white p-3 mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={searchFieldValue}
            disabled={!userText.trim()}
            >
            Submit
        </button>
    </section>
  );
};

export default SearchUsers;