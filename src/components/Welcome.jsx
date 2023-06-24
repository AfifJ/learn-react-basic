const Welcome = ({ greetName }) => {
  return (
    <div className="flex flex-col mt-24">
      <div className="mx-auto font-mono w-fit">Welcome</div>
      <span className="mx-auto font-serif text-3xl font-bold capitalize w-fit">{greetName}</span>
    </ div>
  );
};

export default Welcome;
