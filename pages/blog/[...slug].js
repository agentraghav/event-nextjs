import { useRouter } from 'next/router';
function Mult() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1> Using Slug </h1>
    </div>
  );
}

export default Mult;
