import { BiDotsVerticalRounded } from "react-icons/bi";
const CustomTooltip = ({ active, payload, label , showLabel = true }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black px-3 py-2 rounded-2xl ring ring-white">
                {showLabel && <p className="font-bold text-white text-sm">{label}</p>}
                {payload.map((entry: any, index: number) => (
                    <p key={index} className="text-grayME flex items-center justify-center gap-1">
                        <BiDotsVerticalRounded className="font-extralight " style={{color: entry.color}}/>{`${entry.name}: ${entry.value}`}
                    </p>
                ))}
            </div>
        );
    }

    return null;
};

export default CustomTooltip