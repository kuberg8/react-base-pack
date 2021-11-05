export default function Add({ color, size }) {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 12.85H12.85V13V18C12.85 18.4672 12.4672 18.85 12 18.85C11.5328 18.85 11.15 18.4672 11.15 18V13V12.85H11H6C5.53284 12.85 5.15 12.4672 5.15 12C5.15 11.5328 5.53284 11.15 6 11.15H11H11.15V11V6C11.15 5.53284 11.5328 5.15 12 5.15C12.4672 5.15 12.85 5.53284 12.85 6V11V11.15H13H18C18.4672 11.15 18.85 11.5328 18.85 12C18.85 12.4672 18.4672 12.85 18 12.85H13Z"
        fill={color || "black"}
        stroke={color || "black"}
        strokeWidth="0.3"
      />
    </svg>
  );
}
