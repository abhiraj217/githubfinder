const AboutUs = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-gray-600 text-lg text-center mb-10">
          Welcome to our GitHub Finder application. This platform helps users
          search GitHub profiles and explore developer information easily.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-7">
            Our goal is to provide a simple and efficient way to search
            GitHub users, helping developers explore profiles, discover
            repositories, and connect with the developer community.
          </p>
        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Technologies Used
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>React Router DOM</li>
            <li>Tailwind CSS</li>
            <li>GitHub API</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;