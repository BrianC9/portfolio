import Link from "next/link";
function Logo() {
  return (
    <Link href={"/"}>
      <div className="text-4xl md:text-5xl ">
        <span className="text-primary font-bold ">{`<`}</span>
        <span className="text-secondary font-bold">BC</span>
        <span className="text-primary font-bold">{`>`}</span>
      </div>
    </Link>
  );
}

export default Logo;
