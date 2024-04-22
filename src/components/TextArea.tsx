import { ReactNode } from "react"


interface Props {
    type: 'from' | 'to',
    loading: boolean,
    value: string,
    autoFocus: boolean
    onChange: (value: string) => void,
    ref?: React.MutableRefObject<HTMLTextAreaElement>,
    children?:ReactNode
}

function TextArea({ type, value, onChange, loading, autoFocus,children }: Props) {

    const getPlaceholder = (type: 'from' | 'to', loading: boolean) => {
        if (type === 'from') return 'Enter text'
        if (loading && type === 'to') return 'Translating...'
        return 'Traduction'
    }

    return (
        <div className="relative">
            <textarea
                placeholder={getPlaceholder(type, loading)}
                onChange={e => onChange(e.target.value)}
                value={value}
                autoFocus={autoFocus}
                disabled={type === 'to'}
                className="mt-6 w-full font-normal placeholder:text-neutral-300 dark:placeholder:text-white/30 bg-transparent rounded-xl resize-none outline-none"
                cols={10} rows={6}>

            </textarea>
            {children}
        </div>
    )
}

export default TextArea