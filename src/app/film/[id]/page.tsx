import { useRouter } from "next/router";

const Film = () => {
  const router = useRouter();
  console.log(router.query.id);
  return <h1>О фильме</h1>;
};

export default Film;
