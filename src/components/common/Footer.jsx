import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-[#050505] text-white pt-16 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-1">
                    <div className="mb-6">
                        <Link to="/" className="font-heading font-black text-3xl tracking-tighter text-white">
                            Errorr<span className="text-[#FF4D00]">.</span>in
                        </Link>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                        Performance-obsessed digital marketing for startups, local businesses, law firms, real estate, and manufacturers across India.
                    </p>
                    <div className="flex space-x-3">
                        {['in', 'ig', 'tw', 'yt'].map(icon => (
                            <div key={icon} className="w-10 h-10 rounded-md bg-gray-900 flex items-center justify-center hover:bg-[#FF4D00] text-gray-400 hover:text-white transition-colors cursor-pointer border border-gray-800 uppercase text-xs font-bold">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Services</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">SEO</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">PPC Advertising</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Web Development</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Social Media Marketing</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Content Marketing</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Email Marketing</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">CRO</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Analytics</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Industries</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Law Firms</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Real Estate</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Manufacturing</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Startups</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Local Businesses</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Healthcare</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">E-commerce</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">B2B Services</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Company</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-[#FF4D00] transition-colors">About Us</Link></li>
                        <li><Link to="/free-audit" className="hover:text-[#FF4D00] transition-colors">Contact</Link></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                <p>&copy; 2024 Errorr.in. Founded by Akshat Raj. All rights reserved.</p>
                <p className="mt-4 md:mt-0 hover:text-white cursor-pointer transition-colors">hello@errorr.in</p>
            </div>
        </div>
    </footer>
);

export default Footer;
