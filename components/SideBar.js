import { forwardRef } from "react";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { BsKey } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-black shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/ferox-transparent.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/"></Link>
        <Link href="/overview">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/overview"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <IoHomeOutline className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Overview</p>
            </div>
          </div>
        </Link>
        <Link href="/conexions">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/account"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <AiOutlineWifi className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Conexions</p>
            </div>
          </div>
        </Link>
        <Link href="/settings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/account"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <VscSettings className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </Link>
        <Link href="/devices">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/account"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <HiDevicePhoneMobile className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Devices</p>
            </div>
          </div>
        </Link>
        <Link href="/authentication">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/account"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <BsKey className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Authentication</p>
            </div>
          </div>
        </Link>
        <Link href="/manager">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/account"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <FaUsers className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Client Manager</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/login"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white"
            }`}
          >
            <div className="mr-2">
              <SlLogout className="h-5 w-5" />{" "}
              {/* Use FiUser icon from react-icons */}
            </div>
            <div>
              <p>Exit</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
