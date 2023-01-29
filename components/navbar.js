import Image from "next/image";
import { cx } from "@utils/all";
import Logo from "/public/img/logo.svg";
import {
  GitHubLogoIcon,
  ExternalLinkIcon,
  SunIcon,
  MoonIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import MobileMenu from "./menu";

export default function Navbar(props) {
  return (
    <header
      className={cx(
        !props.noborder && "border-b",
        !props.nobg &&
          "backdrop-filter backdrop-blur-lg bg-opacity-30",
        !props.static && "sticky top-0 z-10",
        " flex items-center justify-between px-5 py-3  "
      )}>
      <div className="flex items-center gap-2">
        <div className="md:hidden flex items-center">
          <MobileMenu sidebar={props.sidebar} active={props.active} />
        </div>
        <Link href="/">
          <a className="flex">
            {/* `flex` class added to avoid spacing issues in image span */}
            <>Code For Pittsburgh</>
          </a>
        </Link>
      </div>
      <nav className="flex items-center gap-5">
        <Link href="https://www.linkedin.com/company/code-for-pittsburgh/">
          <a className="hidden sm:inline-flex items-center gap-1 text-sm border-b text-slate-900 hover:text-violet-500 hover:border-violet-200 focus-visible:bg-violet-100 focus-visible:border-violet-100 focus-visible:outline-4 focus-visible:outline-violet-100">
            LinkedIn
          </a>
        </Link>
        <a
          href="https://github.com/Code-For-Pittsburgh"
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-1 text-sm border-b text-slate-900 hover:text-violet-500 hover:border-violet-200 focus-visible:bg-violet-100 focus-visible:border-violet-100 focus-visible:outline-4 focus-visible:outline-violet-100">
          <span>Support</span>
          <ExternalLinkIcon className="w-3 h-3" />
        </a>
        <a
          href="https://github.com/Code-For-Pittsburgh"
          target="_blank"
          rel="noopener">
          <GitHubLogoIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hidden">
          <SunIcon className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
