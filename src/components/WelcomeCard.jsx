function WelcomeCard({ isLoggedIn, name }) {
  return (
    <div className="card">
      {isLoggedIn ? (
        <h2>Welcome, {name}</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default WelcomeCard;