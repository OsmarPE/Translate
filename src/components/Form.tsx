import { ReactNode } from "react"

function Form({ children }: { children: ReactNode }) {
    return (
        <div className=" p-6 rounded-2xl bg-grayLight dark:bg-gray">
            {children}
        </div>
    )
}

export default Form