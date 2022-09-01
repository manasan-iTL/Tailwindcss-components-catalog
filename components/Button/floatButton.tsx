import React from "react";

const FloatButton: React.FC<{}> = () => {
    return (
        <div>
            <button className="shadow-lg px-2 py-1  bg-yellow-400 text-lg text-white font-semibold rounded  hover:bg-yellow-500 hover:shadow-sm hover:translate-y-0.5 transform transition  ">
                テキスト
            </button>
        </div>
    )
}

export default FloatButton