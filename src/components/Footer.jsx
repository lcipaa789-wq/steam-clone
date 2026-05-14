import React from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TwitterX,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#181818] border-t border-white/10 mt-20 ml-17">
        <div className="max-w-400 mx-auto px-10 py-12">
          <div className="flex flex-wrap justify-between gap-10">
            <div>
              <h1 className="text-4xl font-black text-lime-400">playhop</h1>

              <p className="text-zinc-400 mt-4 max-w-sm leading-7">
                Discover top games, build your collection, and explore the
                gaming world with Playhop.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4">Navigation</h2>

              <ul className="space-y-3 text-zinc-400">
                <li className="hover:text-lime-400 cursor-pointer transition">
                  Home
                </li>

                <li className="hover:text-lime-400 cursor-pointer transition">
                  Trending
                </li>

                <li className="hover:text-lime-400 cursor-pointer transition">
                  Top Rated
                </li>

                <li className="hover:text-lime-400 cursor-pointer transition">
                  Cart
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-black hover:scale-110 transition duration-300"
              >
                <Github size={24} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-black hover:scale-110 transition duration-300"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center text-zinc-400 hover:bg-pink-500 hover:text-white hover:scale-110 transition duration-300"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center text-zinc-400 hover:bg-sky-500 hover:text-white hover:scale-110 transition duration-300"
              >
                <TwitterX size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap justify-between gap-4">
          <p className="text-zinc-500">© 2026 Playhop. All rights reserved.</p>

          <p className="text-zinc-500">Built with React + Tailwind</p>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
