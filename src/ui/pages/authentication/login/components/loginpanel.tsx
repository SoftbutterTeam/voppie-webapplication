import { useNavigate } from "react-router";
import { OrDivide } from "../../shared";
import { AuthServiceOpts } from "../../utils/data";

export function LoginPanel() {
  const navigate = useNavigate();

  function hasEmailLoginError(): boolean {
    return true;
  }

  return (
    <div className="max-w-md overflow-hidden rounded-xl border bg-white shadow-black  shaodw-md text-center py-5 ">
      <h1 className="text-xl font-bold mt-5 "> Log in to Voppie</h1>
      <Loginform />
      <p className="text-sm text-slate-800 ">
        Don't have an account yet?{" "}
        <span
          className="text-sm  cursor-pointer text-secondary"
          onClick={() => navigate("/join")}
        >
          Join
        </span>
      </p>
    </div>
  );

  function Loginform() {
    return (
      <form className="max-w-sm w-full mx-auto p-8 space-y-4  ">
        <input
          type="email"
          placeholder="email address"
          className="main-input"
        />
        <input type="password" placeholder="password" className="main-input" />
        {hasEmailLoginError() && (
          <p className="text-sm text-slate-800 cursor-pointer ">
            Forgot password?
          </p>
        )}

        <button className="main-btn bg-primary hover:scale-105 duration-300 font-medium text-white border-0 ">
          Log in
        </button>
        <OrDivide />
        {AuthServiceOpts.map((item, index) => (
          <button className="icon-login-btn group" key={index}>
            <img
              src={item?.icon}
              className="icon-login duration-300"
              alt={item.alt}
            />
            <p className="mx-auto font-medium duration-300"> {item.title}</p>
          </button>
        ))}
      </form>
    );
  }
}
