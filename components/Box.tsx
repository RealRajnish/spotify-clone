import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  classname?: string;
}

const Box: React.FC<BoxProps> = ({ children, classname }) => {
  return (
    // a special div with some predefined classes and ability to merge more
    <div
      className={twMerge(
        `
  bg-neutral-900
  rounded-lg
  h-fit
  w-full
  `,
        classname
      )}
    >
      {children}
    </div>
  );
};

export default Box;
