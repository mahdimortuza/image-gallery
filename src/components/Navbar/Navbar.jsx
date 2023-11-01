const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <h1>FrameFolio</h1>
      {/* <ul> 
       <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">Bookings</Link>
        </li> 
      </ul>*/}

      <ul className="flex gap-3">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Bookings</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
