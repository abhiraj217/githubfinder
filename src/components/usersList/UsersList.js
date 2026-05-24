import User from "../user.js/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../components/redux/github/GithubSlice";
import loaderImg from "../../assets/images/loaderImg.gif";
import SearchUsers from "../search/SearchUsers";
import { toast } from "react-toastify";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, usersloading , error } = useSelector((state) => state.githubUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

    useEffect(() => {
    console.log(error);

    if (error) {
        toast.error(error);
    }
    }, [error]);
  console.log(users, "dsln");

  return (
    <>
    <SearchUsers />
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 pt-14 lg:pt-20 grid grid-cols-3 gap-2 ">
      {usersloading ? (
        <div className="col-span-3 flex justify-center items-center ">
          <img src={loaderImg} alt="loader" className="w-20 h-20" />
        </div>
      ) : (
        users.map((x) => <User key={x.id} users={x} />)
      )}
    </section>
    </>
  );
};

export default UsersList;
