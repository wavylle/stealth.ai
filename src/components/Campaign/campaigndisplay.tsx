import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LucideIcon, LucideProps } from "lucide-react";

type CampaignCoProps = {
  CampaignName: string;
  CampaignDescription: string;
  CampaignType: string;
  StartedOn: string;
  EndsOn: string;
  CompletedCalls: number;
  ScheduledCalls: number;
  AnsweredCalls: number;
  TotalCalls: number;

};

export default function CampaignCo({  CampaignName , CampaignDescription, CampaignType , StartedOn, EndsOn, CompletedCalls, ScheduledCalls, AnsweredCalls, TotalCalls }: CampaignCoProps) {
    return (
      <div className=' min-h-[180px]  rounded-2xl bg-bg-white-0 box-border max-w-full overflow-hidden flex flex-col items-start justify-start py-3.5 pr-[11px] pl-[15px] gap-[8px] leading-[normal] tracking-[normal] text-left text-xs text-text-main-900 font-label-x-small border-[1px] border-solid border-stroke-soft-200 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)]'>
        <div className='self-stretch flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[8px] text-sm'>
          <div className='flex-1 relative tracking-[-0.01em] leading-[20px] font-medium overflow-hidden text-ellipsis whitespace-nowrap'>
            {CampaignName}
          </div>
          <Badge variant='outline'>{CampaignType}</Badge>
        </div>
        <div className='mb-2 self-stretch relative leading-[16px] text-text-sub-500 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>
          {CampaignDescription}
        </div>
        <Separator />
        <div className='my-2 self-stretch h-10 flex flex-row items-center justify-start gap-[8px] text-center text-base'>
          <div className='flex-1 flex flex-col items-start justify-start gap-[4px]'>
            <div className='self-stretch relative tracking-[-0.01em] leading-[20px] font-medium'>
              {CompletedCalls} / {ScheduledCalls}
            </div>
            <div className='self-stretch relative text-xs leading-[16px] text-text-sub-500'>
              Completed /Scheduled
            </div>
          </div>
          <div className='h-[41px] w-px relative box-border border-r-[1px] border-solid border-stroke-soft-200' />
          <div className='flex-1 flex flex-col items-start justify-start gap-[4px]'>
            <div className='[text-decoration:none] self-stretch relative tracking-[-0.01em] leading-[20px] font-medium text-[inherit]'>
              {AnsweredCalls} / {TotalCalls}
            </div>
            <div className='self-stretch relative text-xs leading-[16px] text-text-sub-500'>
              Answered / Total
            </div>
          </div>
        </div>
        <Separator />
        <div className='my-2 self-stretch h-4 flex flex-row items-start justify-start py-0 pr-[3px] pl-1 box-border gap-[12px] text-text-soft-400'>
          <div className='flex-1 flex flex-row items-start justify-start gap-[11px]'>
            <div className='relative leading-[16px] inline-block min-w-[55px]'>
              Starts on:
            </div>
            <div className='relative leading-[16px] font-medium text-text-sub-500 whitespace-pre-wrap text-center inline-block min-w-[78px]'>
              {StartedOn}
            </div>
          </div>
          <div className='h-[17px] w-px relative box-border border-r-[1px] border-solid border-stroke-soft-200' />
          <div className='flex-1 flex flex-row items-start justify-start gap-[11px]'>
            <div className='flex-1  leading-[16px]'>Ends on</div>
            <div className=' leading-[16px] font-medium text-text-sub-500 whitespace-pre-wrap text-center inline-block min-w-[78px]'>
              {EndsOn}
            </div>
          </div>
        </div>
      </div>
    );
}