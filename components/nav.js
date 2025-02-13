import Link from "next/link";

export default function Nav() {
    return (
        <nav className="Navigation">
          <ul>
              
              <li>
                <Link 
                href="/">Home</Link>
              </li>
             <li>
                <Link href="/about">
                    + infos
                </Link>
             </li>
              
             
          </ul>
      </nav>
    )
}