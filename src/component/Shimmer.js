const Shimmer = () => {
  let card = [];
  return (
    <>
      <div className="flex flex-wrap">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div key={index}>
              <div className="w-56 h-72 m-2 p-1 shadow-md bg-slate-100"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
