export default function Footer() {
  return (
    <footer className="w-full h-12 bg-blue-100 px-4 fixed bottom-0">
      <ul className="w-full h-full flex justify-between items-center uppercase text-sm font-semibold">
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-powderedBlue focus-visible:text-mint-blue active:text-mint-blue"
            href="#"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-powderedBlue focus-visible:text-mint-blue active:text-mint-blue"
            href="#"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-powderedBlue focus-visible:text-mint-blue active:text-mint-blue"
            href="#"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-powderedBlue focus-visible:text-mint-blue active:text-mint-blue"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
