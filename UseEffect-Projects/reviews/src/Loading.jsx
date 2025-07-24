const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#fff",
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid #ddd",
  borderTop: "4px solid #7c3aed",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const Loading = () => {
  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};
export default Loading;
