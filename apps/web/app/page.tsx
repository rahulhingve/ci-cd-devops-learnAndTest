import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Created At: {user.createdAt.toLocaleDateString()}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
