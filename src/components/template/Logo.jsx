import style from "./Logo.module.css"
import Image from 'next/image'



export default function Logo(props) {
  return (
    <aside className={style.logo}>
      <Image
        src="/imgs/gtech-logo-final-04.png"
        alt="logo"
        width={230}
        height={50}></Image>
    </aside>
  )
}


