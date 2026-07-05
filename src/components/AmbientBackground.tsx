const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Violet blob */}
      <div
        className="absolute rounded-full animate-float-1"
        style={{
          width: 520,
          height: 520,
          background: "#7c5cff",
          top: -140,
          left: -120,
          filter: "blur(90px)",
          opacity: 0.35,
        }}
      />
      {/* Cyan blob */}
      <div
        className="absolute rounded-full animate-float-2"
        style={{
          width: 460,
          height: 460,
          background: "#35e6c4",
          bottom: -160,
          right: -100,
          filter: "blur(90px)",
          opacity: 0.35,
        }}
      />
      {/* Deep violet blob */}
      <div
        className="absolute rounded-full animate-float-3"
        style={{
          width: 360,
          height: 360,
          background: "#4a3bff",
          top: "40%",
          left: "60%",
          filter: "blur(90px)",
          opacity: 0.18,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
