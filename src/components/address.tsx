import Link from "next/link"
import styles from "../styles/Address.module.css"

interface AddressProps{
    text:string
    link: string
}

export default function Address(props:AddressProps){
    return (
        <div className={styles.address}>
            <Link href={props.link}>
                {props.text}
            </Link>   
        </div>
    )
}