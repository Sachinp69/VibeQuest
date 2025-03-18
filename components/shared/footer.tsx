
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl md:px-10 xl:px-0 w-full wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            style={{ marginLeft: '40px' }}
            src="/assets/images/logo.svg"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>

        <p>2025 VibeQuest. No Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
