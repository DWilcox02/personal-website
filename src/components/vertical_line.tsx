interface VerticalLineProps {
    colour: string;
}

function VerticalLine({colour}: VerticalLineProps) {
  return (
    <div
      style={{
        borderLeft: `4px solid ${colour}`, // Adjust the color and thickness as needed
        height: "100%", // Adjust the height to match your design
        opacity: 0.12
      }}
    ></div>
  );
}

export default VerticalLine;