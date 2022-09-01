import React from "react";

const DefaultButton: React.FC<{}> = () => {
    return (
        <div>
            <button className="px-4 py-1 text-white bg-green-500 hover:bg-green-300 hover:scale-90 ">
                完了
            </button>
        </div>
    )
}

export default DefaultButton