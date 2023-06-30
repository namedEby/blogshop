import { loginicon, logo, shopicon } from "../assets";
import { useAppSelector } from "../redux";
import { styles } from "../styles";

const Navbar = () => {
  const text = useAppSelector((state)=>state.auth.NAVBARTEXT)
  return (
    <nav
      className={` w-full h-40 flex items-center  fixed top-0 z-20 bg-primary grid grid-row-2 grid-template-rows: 1fr 1fr; rounded-b-lg `}
    >
      <div className="h-20 pr-10 pl-10 w-full bg-secondary flex items-center ">
        <div className="grid grid-cols-3 w-full flex mx-auto">
          <div className="w-20 h-10 flex justify-start">
            <img src={shopicon} />
          </div>
          <div className="w-full h-10 flex items-center justify-center ">
            <img src={logo} />
          </div>
          <div className="w-full flex items-center justify-end">
            <img src={loginicon} />
          </div>
        </div>
      </div>
      <div className="bg- w-full h-[5em]   ">
       
        <h1 className={`${styles.navbarText}text-xl p-5 ml-10 font-serif`}  >{text}</h1>
        
      
      </div>
     
    </nav>
  );
};

export default Navbar;
