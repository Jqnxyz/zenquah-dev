
import Link from "next/link"

export function button(props) {
    if (props.type == "full") {
        return (
            <Link href={props.url || "#!"}>
                <a>
                    <div className="w-full text-black ring-black ring-1 transition-all bg-white inline-block rounded-md px-5 py-2 my-2 hover:text-pink-400 hover:ring-pink-400 hover:ring-opacity-80">{props.title}</div>
                </a>
            </Link>
        )
    } else {
        return (
            <Link href={props.url || "#!"}>
                <a>
                    <div className="text-black ring-black ring-1 transition-all bg-white inline-block rounded-md px-5 py-2 my-2 hover:text-pink-400 hover:ring-pink-400 hover:ring-opacity-80">{props.title}</div>
                </a>
            </Link>
        )
    }
}

export function borderlessButton(props) {
    return (
        <Link href={props.url || "#!"}>
            <a>
                <div className="text-black transition-all bg-white inline-block rounded-md px-5 py-2 my-2 hover:text-pink-400">{props.title}</div>
            </a>
        </Link>
    )
}

