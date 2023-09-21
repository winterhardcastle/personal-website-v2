import { hackerText } from "../../utils/functions";

const Footer = () => {
    return (
        <div id="footer" className="pt-24 px-8">
            <p onMouseOver={hackerText} data-value="© 2023 WINTER HARDCASTLE" className="hover:text-reseda bg-white text-black text-sm py-4 border-reseda border-t ">© 2023 WINTER HARDCASTLE</p>
        </div>
    )
}

export default Footer;