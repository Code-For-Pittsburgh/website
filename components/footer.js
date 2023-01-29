export default function Footer() {
  return (
    <div className="border-t mt-20">
      <footer>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-10 max-w-screen-lg mx-auto text-sm px-5 text-gray-500">
          <p>
            © 2023{" "}
            <a
              href="https://web3templates.com"
              target="_blank"
              rel="noopener">
              Code For Pittsburgh
            </a>
            . All rights reserved
          </p>
          <nav className="flex gap-5">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              Terms
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              License
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              FAQ
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}