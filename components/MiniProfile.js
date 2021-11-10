import React from "react";
import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 object-cover rounded-full border p-[2px]"
        src="https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg"
        alt=""
      />

      <div>
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">
          Hello {session?.user?.username}! Welcome
        </h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
