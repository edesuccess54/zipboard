import type { IconProps } from "../../types/iconProps";

export const PlusIcon: React.FC<IconProps> = ({ stroke}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.2695 5.29962V49.2381"
        stroke={stroke}
        strokeWidth="9.61626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.2395 27.2689L5.30104 27.2689"
        stroke={stroke}
        strokeWidth="9.61626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
