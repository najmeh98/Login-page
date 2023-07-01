export const ArrowDown = ({ fill, style }: { fill: string; style: any }) => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill={fill}
    style={style}
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </svg>
);

export const BacktoNumberIcon: React.JSX.Element = (
  <ArrowDown
    fill="#302f2f"
    style={{
      height: "35",
      width: "35",
      translate: "-15px -100px",
      rotate: "90deg",
      cursor: "pointer",
      position: "absolute",
    }}
  />
);
