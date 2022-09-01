import React from "react";

const GradationButton: React.FC<{}> = () => {
    return (
        <div>
            <button className="text-white w-96 bg-gradient-to-r from-orange-600 to-orange-300">
                こちら
            </button>
        </div>
    )
}

export default GradationButton