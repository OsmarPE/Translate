import { ButtonHTMLAttributes } from "react"


function InterchangeButton({...props}:ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className="size-10 rounded-full text-white transition duration-300 grid place-items-center bg-blue-600 hover:bg-blue-500 disabled:dark:opacity-70">
            <i className="ri-arrow-left-right-line"></i>
        </button>
    )
}

export default InterchangeButton