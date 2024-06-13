import landing from "../assets/landing.svg";
import appdownloadimage from "../assets/download.webp";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gao-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange">
          {" "}
          Grab Your Takeway Now
        </h1>
        <span className="text-x1">You are one click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            {" "}
            Order takeway even faster
          </span>
          <span>
            {" "}
            Lorem ipsum, i quos molestiae nesciunt veniam, autem sed maxime
            necessitatibus temporibus qui vitae placeat, ullam accusamus odio
            similique.
          </span>
          <img src={appdownloadimage} />
        </div>
      </div>
    </div>
  );
}
