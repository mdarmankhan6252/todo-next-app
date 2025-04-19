
const Navbar = () => {
   return (
      <div className="flex py-3 flex-wrap justify-around">
         <h2 className="text-lg font-semibold">Todo App</h2>
         <ul className="flex gap-10">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
         </ul>         
      </div>
   );
};

export default Navbar;