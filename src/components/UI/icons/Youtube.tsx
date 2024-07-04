import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Youtube: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#fff";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.455 4.183c-.118-1.137-.371-2.393-1.303-3.053C17.428.618 16.48.599 15.593.6c-1.873 0-3.748.003-5.62.004L4.567.609c-.753 0-1.484-.058-2.183.268-.6.28-1.07.812-1.353 1.404C.64 3.104.558 4.037.51 4.948a43.208 43.208 0 00.027 4.977c.076 1.21.27 2.546 1.205 3.317.829.682 1.998.716 3.072.717l10.232.008c.438.001.894-.007 1.34-.055.876-.095 1.712-.346 2.275-.996.569-.655.715-1.567.801-2.43.21-2.095.208-4.21-.007-6.303zM8 10.22V4.347l5.084 2.936L8 10.22z"
        fill={fill}
      />
    </svg>
  );
};

export default Youtube;
