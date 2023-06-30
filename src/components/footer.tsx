import { logo2 } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary p-16 grid grid-row-2 ">
      <div className="grid grid-cols-3 w-full h-60 flex mx-auto px-5">
        <div className={`flex justify-start ${styles.padding} `}>
          <img src={logo2} className="w-[210px] h-[60px]" />
        </div>
        <div className={`flex  justify-end  ${styles.padding}`}>
          <div className="flex flex-col gap-10">
            <p className="">ADDRESS</p>
            <p className="font-light "> 13 Brinkley Circuit Palmerston</p>
          </div>
        </div>
        <div className={`flex   justify-end  ${styles.padding}`}>
          <div className="flex flex-col gap-10">
            <p className="text-center">SOCIAL MEDIA</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full flex mx-auto px-5">
        <div>
          <p className="tracking-[2px]">2022 PURE BEAUTY.POWERED BY PLANETMEDIA</p>
        </div>
        <div className="flex   justify-end">
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
