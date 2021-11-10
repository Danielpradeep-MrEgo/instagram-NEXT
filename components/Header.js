import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { modalAtom } from "../atoms/ModalAtom";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(modalAtom);

  console.log(session);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              placeholder="Search"
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">
                  9
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setIsOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              {/* <img
                src={session.user?.image}
                // src="https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg"
                alt="profile pic"
                className="rounded-full w-10 h-10 cursor-pointer object-cover"
                onClick={signOut}
              /> */}
            </>
          ) : (
            <button onClick={signIn}>signIn</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
