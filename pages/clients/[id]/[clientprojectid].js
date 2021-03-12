import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

function ClientDyn() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Inside Client folder Dynamic Folder and Dynamic file</h1>
    </div>
  );
}

export default ClientDyn;
