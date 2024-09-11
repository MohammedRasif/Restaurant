import img from "../../img/Removebg-preview.png";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            {/* Top Separator */}
            <hr className="border-t border-gray-700" />

            {/* Main Footer Content */}
            <footer className="footer p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <img src={img} className="h-32 w-auto mb-4" alt="Restaurant Logo" />
                </div>

                {/* Useful Links */}
                <div>
                    <h6 className="footer-title text-orange-400 mb-4">Useful Links</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Home</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">About</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Services</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h6 className="footer-title text-orange-400 mb-4">Our Services</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Web Design</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Web Development</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Product Management</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Marketing</a></li>
                        <li><a href="#" className="link link-hover hover:text-orange-400 transition-colors">Graphic Design</a></li>
                    </ul>
                </div>

                {/* Location */}
                <div>
                    <h6 className="footer-title text-orange-400 mb-4">Location</h6>
                    <p>
                        A108 Adam Street<br />
                        Anowara, Chottogram<br />
                        Bangladesh
                    </p>
                </div>
            </footer>

            {/* Bottom Separator */}
            <hr className="border-t border-gray-700" />

            {/* Bottom Footer Content */}
            <div className="bg-stone-900">
                <div className="text-center py-5 text-white">
                    <p>© Copyright <span className="font-bold">Restaurantly</span>. All Rights Reserved</p>
                    <p>Designed by <span className="text-orange-400">Mohammed Rasif</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
