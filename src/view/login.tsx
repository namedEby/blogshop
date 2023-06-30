import { useState } from "react";

import { loginimage, logo2 } from "../assets";
import { styles } from "../styles";
import { useNavigate } from "react-router";
import { LOGIN } from "../redux/auth/actions/login";
import { useAppDispatch } from "../redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch(LOGIN({ username: username, password: password })).then(
      (response) => {
        if (response.meta.requestStatus == "fulfilled") {
          navigateTo("/blog");
        }
      }
    );
  };

  return (
    <div className="bg-primary w-screen h-screen  ">
      <div className="grid grid-cols-2 w-full h-full flex mx-auto ">
        <div className="p-10">
          <img src={logo2} />
          <form>
            <div className="pt-20 flex flex-col">
              <h1 className={`${styles.loginText}`}>Login</h1>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-16 pb-5 bg-transparent border-b border-secondary-lighter outline-none placeholder-secondary w-[30em] font-thin caret-secondary focus:border-secondary"
              />
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-16 pb-5 bg-transparent border-b border-secondary outline-none placeholder-secondary w-[30em] font-thin caret-secondary"
              />
              <div>
                <button
                  className="rounded-full bg-transparent border border-secondary text-secondary px-4 py-2 mt-16 w-[30em]"
                  onClick={handleClick}
                >
                  Login
                </button>
                <p className="w-full ml-44 mt-8 font-thin text-secondary ">
                  {" "}
                  LOGIN OR{" "}
                  <a className="font-bold " href="/shop">
                    SHOP
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="items-center flex justify-end  ">
          <img src={loginimage} className="hidden sm:block base:block" />
        </div>
      </div>
    </div>
  );
};

export default Login;
