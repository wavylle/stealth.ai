import SideNavBar from "@/components/sidenav/sidenav";


type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideNavBar />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
