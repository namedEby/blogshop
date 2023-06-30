import { loginimage } from "../assets";
import { styles } from "../styles";

interface BlogcardProps {
  category: string;
  text: string;
  image: string;
  carddirection: number;
}

const Blogcard: React.FC<BlogcardProps> = ({
  category,
  text,
  image,
  carddirection,
}) => {
  if (carddirection == 1) {
    return (
      <div className="bg-primary  shadow-lg flex h-[26em] grid grid-cols-2 group hover:scale-105 transition-transform duration-300  ">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt="image"
            className="object-cover w-full h-full overflow-hidden "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="w-full flex flex-col items-start justify-start p-5 ">
            <h3 className="text-lg font-thin text-secondary font-serif">{category}</h3>
            <h1 className={`${styles.sectionHeadText} font-serif`}>{text}</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>  <div className="bg-primary  shadow-lg flex h-[26em] grid grid-cols-2 group hover:scale-105 transition-transform duration-300 ">
    <div className="w-full flex items-center justify-end">
      <div className="w-full flex flex-col items-start justify-start p-5 ">
        <h3 className="text-lg font-thin text-secondary font-serif">{category}</h3>
        <h1 className={`${styles.sectionHeadText} font-serif`}>{text}</h1>
      </div>
    </div>
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt="image"
        className="object-cover w-full h-full "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
    </div>
  </div></div>;
  }
};

export default Blogcard;
