const Header = () => {
  return (
    <div className="w-[800px] mx-auto flex justify-between items-center pt-5 px-5 mt-6">
      <div className="flex gap-3 items-center">
        <input className="w-5 h-5" type="checkbox"></input>
        <h5 className="text-xl font-semibold">3 files selected</h5>
      </div>
      <button className="text-red-600 font-semibold">Delete</button>
    </div>
  );
};

export default Header;
