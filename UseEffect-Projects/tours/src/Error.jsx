const Error = () => {
  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>Something went wrong 😢</h2>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#fff5f5",
};

const textStyle = {
  color: "#e53e3e", // red tone
  fontSize: "1.5rem",
  fontWeight: "500",
};

export default Error;
