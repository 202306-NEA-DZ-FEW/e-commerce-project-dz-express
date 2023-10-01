import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <button className="font-bold text-2xl tracking-wide md:hover:tracking-widest transform-all ease-in-out duration-500 font-mono text-black z-50 uppercase">
        <span className="text-emerald-400">Dz</span>Express
        <span className="text-emerald-400">.</span>
      </button>
    </Link>
  )
}

export default Logo
