import CurrentImage from "./CurrentImage"

type Props = {
    id: string,
    currentFile: string | undefined,
}

export default function File({ id, currentFile }: Props) {
    return (
        <>
            <input
                className={`appearance-none block w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-gray-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id={id}
                name={id}
                type="file"
            />
            {currentFile != undefined && currentFile != null && (<CurrentImage url={currentFile} />)}
        </>
    )
}
