import SideNavBar from "@/components/sidenav/sidenav";
import { auth } from '@clerk/nextjs/server'

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  // auth().protect()

  return (
		<div className='flex min-h-screen w-full flex-col h-screen'>
			<SideNavBar />
			<div className='flex flex-col w-full sm:pl-[242px] h-full'>
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
