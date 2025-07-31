import type { IconProps } from '../../types/iconProps';

export const MinusIcon: React.FC<IconProps> = ({ stroke}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 55 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.2395 22.894L5.30104 22.894"
        stroke={stroke}
        strokeWidth="9.61626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
