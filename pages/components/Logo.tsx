import logoSvg from "../../public/assets/logo.svg"
import Image from "next/image";


export const Logo = () => <Image src={logoSvg} alt={"logo"}></Image>;