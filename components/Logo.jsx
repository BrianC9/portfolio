import Link from "next/link";
function Logo() {
  return (
    <Link href={"/"}>
      <div className="text-4xl md:text-5xl ">
        <span className="text-primary font-extrabold ">{`<`}</span>
        <span className="text-secondary font-bold tracking-tighter mx-[0.15rem] ">
          BC
        </span>
        <span className="text-primary font-extrabold ">{`>`}</span>
      </div>
    </Link>
  );
}

export default Logo;
