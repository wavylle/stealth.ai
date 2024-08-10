import SideNavBar from "@/components/sidenav/sidenav";
import { auth } from '@clerk/nextjs/server'

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  // auth().protect()

  return (
    <div className="flex overflow-hidden h-screen">
      <SideNavBar />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
