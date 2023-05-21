import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link href={"/teachers"}>Show Teachers</Link>
    </div>
  );
};

export default Home;
