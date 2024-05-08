const NotFound = ({ error }) => {
  console.log(error);
  return (
    <section className="text-center space-y-11">
      <h2 className="font-bold text-xl text-[#2D2D2D] dark:text-white">
        {error.title}
      </h2>
      <p className="text-lg text-[#757575]">
        {error.message} {error.resolution}
      </p>
    </section>
  );
};

export default NotFound;
