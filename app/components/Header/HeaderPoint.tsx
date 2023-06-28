import { BsArrowRightShort } from "react-icons/bs";

interface HeaderPointProps {
  label: string;
}

const HeaderPoint: React.FC<HeaderPointProps> = function ({ label }) {
  return (
    <div className="flex items-start mb-4">
      <p className="text-sm max-w-[500px]">{label}</p>
    </div>
  );
};

export default HeaderPoint;
