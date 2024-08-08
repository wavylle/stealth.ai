'use client';

import NavButton from './navbuttons';
import { BrainCircuit, Database, Home, Settings } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

export type ContentType = {
  className?: string;
};

const MAIN = [
  {
    name: 'Campaigns',
    icon: Home,
    path: '/campaigns',
  },
  {
    name: 'Agents',
    icon: BrainCircuit,
    path: '/agents',
  },
  {
    name: 'Knowledge Base',
    icon: Database,
    path: '/qr',
  },
];

const CAMPAIGNS = [
  {
    name: 'Dashboard',
    icon: Home,
    path: '/',
  },
  {
    name: 'be4tbe',
    icon: Database,
    path: '/sidenav3',
  },
  {
    name: 'uhrtg',
    icon: Settings,
    path: '/qr',
  },
];

const SETTINGS = [
  {
    name: 'Dashboard',
    icon: Home,
    path: '/',
  },
  {
    name: 'uhrtg',
    icon: Settings,
    path: '/qr',
  },
];

export default function SideNavBar() {
  const pathname = usePathname();
  return (
    <div className='flex flex-row w-[252px]'>
      <div className=' w-full h-screen flex flex-col items-start justify-start p-5 box-border gap-[19px] leading-[normal] tracking-[normal] text-left text-sm text-text-sub-500 font-label-x-small'>
        <div className='flex flex-row items-start self-stretch justify-start gap-3 text-text-main-900'>
          <BrainCircuit className=" w-8 h-full mx-[2px] stroke-slate-500 stroke-[2px] " />
          <div className='flex flex-col items-start justify-start flex-1 gap-1'>
            <div className='[text-decoration:none] self-stretch relative tracking-[-0.01em] leading-[20px] font-medium text-[inherit]'>
              Synergy AI
            </div>
            <div className='[text-decoration:none] self-stretch relative text-xs leading-[16px] text-text-sub-500'>
              HR Management
            </div>
          </div>
        </div>
        <div className='self-stretch h-px relative border-stroke-soft-200 border-t-[1px] border-solid box-border' />

        <div className='self-stretch h-[645px] flex flex-col items-start justify-start gap-5'>
          <div className='self-stretch flex flex-col items-start justify-start gap-1.5 text-left text-sm text-text-main-900 font-label-x-small'>
            <div className=' flex-1 relative tracking-[0.04em] leading-[16px] uppercase font-medium self-stretch flex flex-row items-start justify-start p-1 text-left text-xs text-text-soft-400 font-label-x-small'>
              MAIN
            </div>

            {MAIN.map((item, index) => (
              <NavButton
                key={index}
                name={item.name}
                active={pathname === item.path}
                icon={
                  <item.icon
                    className={`stroke-[2px] w-5 h-5 justify-center ${
                      pathname === item.path
                        ? 'stroke-prime-base'
                        : 'stroke-icon-sub-500'
                    }`}
                  />
                }
              />
            ))}
          </div>

          {/* campaigns */}
          <div className='self-stretch flex flex-col items-start justify-start gap-1.5 text-left text-sm text-text-main-900 font-label-x-small'>
            <div className=' flex-1 relative tracking-[0.04em] leading-[16px] uppercase font-medium self-stretch flex flex-row items-start justify-start p-1 text-left text-xs text-text-soft-400 font-label-x-small'>
              CAMPAIGNS
            </div>
            {CAMPAIGNS.map((item, index) => (
              <NavButton
                key={index}
                name={item.name}
                active={pathname === item.path}
                icon={
                  <item.icon
                    className={`stroke-[2px] w-5 h-5 justify-center ${
                      pathname === item.path
                        ? 'stroke-prime-base'
                        : 'stroke-icon-sub-500'
                    }`}
                  />
                }
              />
            ))}
          </div>
        </div>

        <Separator className='bg-stroke-soft-200' />

        <div className='self-stretch flex flex-col items-start justify-start gap-1.5 text-left text-sm text-text-main-900 font-label-x-small'>
          {SETTINGS.map((item, index) => (
            <NavButton
              key={index}
              name={item.name}
              active={pathname === item.path}
              icon={
                <item.icon
                  className={`stroke-[2px] w-5 h-5 justify-center ${
                    pathname === item.path
                      ? 'stroke-prime-base'
                      : 'stroke-icon-sub-500'
                  }`}
                />
              }
            />
          ))}
        </div>
      </div>
      <Separator orientation='vertical' className='h-screen '></Separator>
    </div>
  );
}
