import Link from "next/link"

interface AddressProps{
    text:string
    link: string
}

export default function Address(props:AddressProps){
    return (
        <div>
            <Link href={props.link}>
                {props.text}
            </Link>   
        </div>
    )
}