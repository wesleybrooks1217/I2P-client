import React from "react";

function Medal({ title, iconUrl }) {
  const gradient = `linear-gradient(135deg, rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},1) 0%, rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},1) 100%)`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        backgroundImage: gradient,
      }}
    >
      <img src={iconUrl} alt="medal icon" style={{ width: "50px", height: "50px", marginRight: "20px" }} />
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</div>
    </div>
  );
}

export default Medal;
