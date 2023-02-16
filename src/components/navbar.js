import Link from "next/link";

export default function Navbar() {
  return (
    <header>
    <div className="container">
      <div className="header-main d-flex align-items-center justify-content-between">
         <div className="logo"><img src="/logo.svg" width="150px"/></div>
         <nav>
            <ul className="d-flex">
               <li><Link href="/">Home</Link></li>
               <li><Link href="/blog">Blog</Link></li>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/contact">Contact</Link></li>
            </ul>
         </nav>
      </div>
    </div>
 </header>
  );
}