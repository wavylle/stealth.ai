import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
  <div className="h-full lg:flex flex-col items-center justify-center">
    <div className="text-center space-y-4 pt-16">
      {/* <h1 className="font-bold text-3xl text-[#2E2A47]">
        Welcome Back!
      </h1> */}
    </div>
    <div className="flex items-center justify-center">
      <ClerkLoaded>
        <SignIn  />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  </div>
  <div className="h-full bg-indigo-400 hidden lg:flex items-center justify-center">
    <Image src="/testlogo.svg" height={200} width={200} alt="logo"/>
  </div>
</div>
  );
}
