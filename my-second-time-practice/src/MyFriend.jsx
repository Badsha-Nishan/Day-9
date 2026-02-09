export default function ({ friend }) {
  const { name, email, username, address } = friend;
  return (
    <div>
      <h2 style={{ color: "red", marginTop: "100px" }}>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h4>Username: {username}</h4>
      <p>City Name: {address.city}</p>
    </div>
  );
}
