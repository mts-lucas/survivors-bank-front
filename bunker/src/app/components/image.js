import Image from "next/image";
import Link from 'next/link';



export function Logo(){
    return (
        <Link href="/">
        <div className="rounded-full overflow-hidden mr-0">
          <Image
            src="/assets/images.jpeg"
            width={50}
            height={50}
            alt="Picture of the logo"
          />
        </div>
      </Link>
    )
}