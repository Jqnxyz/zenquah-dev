import Link from "next/link"
import Lodash from "lodash"

function articleImagePage(props) {
    return (
        <div className="pb-5 mb-5 rounded-none md:rounded-b-lg bg-white shadow-md">
            <img className="object-cover rounded-none md:rounded-t-lg h-72 mb-5 w-full" src={props.image} />
            <div className="px-5 font-medium text-2xl text-center">{props.title}</div>
            <div className="px-5 mt-5 font-light break-words text-justify">{props.content}</div>
            <Link href={props.url}>
                <a href={props.url}>
                    <div className="border-t-2 transition-colors border-gray-100 mt-5 border-dotted cursor-pointer hover:border-pink-400 hover:text-pink-400">
                        <div className="inline-block w-full pl-5 pt-5 transition-colors font-extralight">{props.date}</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

function articleTextPage(props) {
    return (
        <div className="py-5 mb-5 rounded-none md:rounded-lg bg-white shadow-md">
            <div className="px-5 font-medium text-2xl">{props.title}</div>
            <div className="px-5 mt-5 font-light break-words text-justify">{props.content}</div>
            <Link href={props.url}>
                <div className="border-t-2 transition-colors border-gray-100 mt-5 border-dotted cursor-pointer hover:border-pink-400 hover:text-pink-400">
                    <div className="inline-block w-full pl-5 transition-colors font-extralight">{props.date}</div>
                </div>
            </Link>
        </div>
    )
}

export function articlePage(props) {
    if (!Lodash.isEmpty(props.image)) {
        return articleImagePage(props)
    } else {
        return articleTextPage(props)
    }
}