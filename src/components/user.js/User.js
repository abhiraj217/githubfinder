const User = ({ users }) => {

const { login, avatar_url , html_url } = users;

  return (
    <div className="border border-gray-300 flex flex-col items-center gap-4 p-6 rounded-lg hover:shadow-lg transition duration-300">
      <img src={avatar_url} alt={login} className="rounded-full w-32 h-32 hover:scale-105 transition duration-300" />

      <h4>{login}</h4>

      <a href={html_url} className="py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition duration-300">More</a>
    </div>
  );
};

export default User;
