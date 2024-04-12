import { ChangeEvent } from "react"
import { languages } from "../assets/Helpers"
import { languagesType } from "../types"

interface Props {
    type: 'from' | 'to',
    value: string,
    onChange: (language: languagesType) => void
}


function Select({ onChange, type, value }: Props) {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as languagesType)
    }

    

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm text-dark/45 dark:text-white/45 capitalize">{type}:</span>
            <div className="w-full h-12 relative">
                <i className="absolute top-1/2 left-4 -translate-y-1/2 ri-global-line"></i>
                {/* <i className="absolute top-1/2 right-4 -translate-y-1/2 ri-arrow-down-s-line"></i> */}
                <select onChange={handleChange} value={value} className="w-full h-full bg-transparent cursor-pointe border-none outline-none border bg-white dark:bg-dark cursor-pointer rounded-3xl pl-10 text-sm">
                    {type === 'from' && <option value="auto">spanish</option>}
                    {
                        Object.entries(languages).map(([key, value]) => <option className="border-none" key={key} value={key}>{value}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default Select