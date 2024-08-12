import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


type CampaignCoProps = {
  CampaignName: string;
  CampaignDescription: string;
  CampaignType: string;
  StartedOn: string;
  EndsOn: string;
  AnsweredTodayCalls: number;
  TotalAnsweredCalls: number;
};



export default function InboundCampaignCo({ CampaignName, CampaignDescription , CampaignType, StartedOn, EndsOn, AnsweredTodayCalls, TotalAnsweredCalls }: CampaignCoProps) {
  return (
    <div
      className='w-full shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-2xl bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-3.5 px-[15px] gap-3 leading-[normal] tracking-[normal] text-left text-xs text-text-main-900 font-label-x-small'>
      <div className='self-stretch flex flex-row items-center justify-start gap-space-200 text-sm'>
        <div className='flex-1 relative tracking-[-0.01em] leading-[20px] font-medium'>
          {CampaignName}
        </div>
        <div className='rounded-980xl bg-purple-light overflow-hidden flex flex-row items-center justify-center py-0.5 px-[7px] text-center text-xs text-purple-darker'>
          <a className='[text-decoration:none] relative leading-[16px] font-medium text-[inherit] inline-block min-w-[48px]'>
            {CampaignType}
          </a>
        </div>
      </div>
      <div className='self-stretch relative leading-[16px] text-text-sub-500'>
        {CampaignDescription}
      </div>
      <div className='self-stretch flex flex-col items-start justify-start text-center text-base'>
        <div className='self-stretch h-10 flex flex-row items-start justify-center gap-2.5'>
          <div className='flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center py-0 px-5'>
            <div className='self-stretch flex flex-col items-center justify-center gap-1'>
              <div className='self-stretch relative tracking-[-0.01em] leading-[20px] font-medium'>
                {AnsweredTodayCalls}
              </div>
              <div className='relative text-xs leading-[16px] text-text-sub-500 inline-block min-w-[122px]'>
                Calls answered today
              </div>
            </div>
          </div>
          <div className='h-[41px] w-px relative border-stroke-soft-200 border-r-[1px] border-solid box-border shrink-0' />
          <div className='flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center py-0 px-5'>
            <div className='self-stretch flex flex-col items-center justify-center gap-1'>
              <a className='[text-decoration:none] self-stretch relative tracking-[-0.01em] leading-[20px] font-medium text-[inherit]'>
                {TotalAnsweredCalls}
              </a>
              <div className='relative text-xs leading-[16px] text-text-sub-500 inline-block min-w-[119px]'>
                Total Answered Calls
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='self-stretch flex flex-col items-start justify-start text-text-sub-500'>
        <div className='self-stretch h-4 flex flex-row items-start justify-start gap-2'>
          <div className='flex-1 flex flex-row items-center justify-center py-0 px-[7px] gap-[11px]'>
            <div className='relative leading-[16px] inline-block min-w-[46px]'>Started:</div>
            <div className='relative leading-[16px] font-medium text-text-main-900 whitespace-pre-wrap text-center inline-block min-w-[78px]'>
              {StartedOn}
            </div>
          </div>
          <div className='h-[17px] w-px relative border-stroke-soft-200 border-r-[1px] border-solid box-border' />
          <div className='flex-1 flex flex-row items-center justify-center py-0 px-1.5 gap-2.5'>
            <a className='[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[50px]'>
              Ends on:
            </a>
            <div className='relative leading-[16px] font-medium text-text-main-900 whitespace-pre-wrap text-center inline-block min-w-[78px]'>
              {EndsOn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}