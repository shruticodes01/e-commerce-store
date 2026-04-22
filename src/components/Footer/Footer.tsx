export default function Footer() {
  return (
    <footer className="w-full h-12 bg-blue-100 px-4 fixed bottom-0">
      <ul className="w-full h-full flex justify-between items-center uppercase text-sm font-semibold">
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-mint-blue focus-visible:text-gray-600 active:text-gray-600"
            href="#"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-mint-blue focus-visible:text-gray-600 active:text-gray-600"
            href="#"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-mint-blue focus-visible:text-gray-600 active:text-gray-600"
            href="#"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-mint-blue focus-visible:text-gray-600 active:text-gray-600"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
