import Link from "next/link"
import Lodash from "lodash"

function articleImageCard(props) {
    return (
        <Link href={props.url}>
            <div className="group cursor-pointer py-5 mb-5 rounded-none md:rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">{props.title}</div>
                <img className="object-cover h-72 my-5 w-full" src={props.image} />
                <div className="px-5 mt-5 font-light break-words text-justify">{props.description}</div>
                <div className="transition-colors border-t-2 border-gray-100 mt-5 border-dotted group-hover:border-pink-400 group-hover:text-pink-400">
                    <div className="inline-block w-3/6 pl-5 transition-colors font-extralight">{props.date}</div>
                    <div className="inline-block w-3/6 transition-colors text-right font-semibold pr-5 pt-5">{props.action}</div>
                </div>
            </div>
        </Link>
    )
}

function articleTextCard(props) {
    return (
        <Link href={props.url}>
            <div className="group cursor-pointer py-5 mb-5 rounded-none md:rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">{props.title}</div>
                <div className="px-5 mt-5 font-light break-words text-justify">{props.description}</div>
                <div className="transition-colors border-t-2 border-gray-100 mt-5 border-dotted group-hover:border-pink-400 group-hover:text-pink-400">
                    <div className="inline-block w-3/6 transition-colors pl-5 font-extralight">{props.date}</div>
                    <div className="inline-block w-3/6 transition-colors text-right font-semibold pr-5 pt-5">{props.action}</div>
                </div>
            </div>
        </Link>
    )
}

export function articleCard(props) {
    if (!Lodash.isEmpty(props.image)) {
        return articleImageCard(props)
    } else {
        return articleTextCard(props)
    }
}