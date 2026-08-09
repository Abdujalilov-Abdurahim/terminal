export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid-fade"
      style={{
        backgroundImage:
          "linear-gradient(rgba(53,208,180,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(53,208,180,0.035) 1px, transparent 1px)"
      }}
    />
  );
}
