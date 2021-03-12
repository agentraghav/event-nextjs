import Link from 'next/link';

function HomePage() {
  const clients = [
    { id: 'max', name: 'maxmillian' },
    { id: 'manu', name: 'manuel' },
  ];
  return (
    <div>
      <h1>The home page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
