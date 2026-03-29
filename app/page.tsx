import Topo from "@/components/menu";
import Aboutme from "@/components/aboutme";
import Experience from "@/components/experience";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-sm">
      <div>
        <Topo />
      </div>
      <div>
        <Aboutme />
      </div>
      <div>
        <Experience />
      </div>
      <div className="text-center text-gray-500 text-xs m-6">
        © 2025 André Silva. All rights reserved.
      </div>
    </div>
  );
}
