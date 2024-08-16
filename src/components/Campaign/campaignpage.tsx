'use client';

import CampaignCo from '@/components/Campaign/campaigndisplay';
import CreateCampaignModal from '@/components/Campaign/create-campaign-modal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, PhoneIncoming, PhoneOutgoing, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function CampaignPageCo() {
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	const [campaigns, setCampaigns] = useState<any[]>([]);

	const fetchCampaigns = async () => {
		// Fetch campaigns data from your API
		const response = await fetch("/api/campaigns");  // Adjust the API endpoint accordingly
		const data = await response.json();
		setCampaigns(data.campaigns);
	  };
	
	  useEffect(() => {
		fetchCampaigns(); // Fetch campaigns on page load
	  }, []);

  return (
		<div className='w-full  max-w-full flex flex-col items-start justify-start py-5 px-8 box-border gap-5 leading-[normal] tracking-[normal] text-left text-sm text-text-sub-500 font-label-x-small'>
			<Tabs defaultValue='all' className='flex flex-col w-full '>
				<div className=' flex justify-between flex-1 self-stretch w-full max-w-full'>
					<TabsList className='grid w-[620px] grid-cols-3'>
						<TabsTrigger value='all'>All Campaigns</TabsTrigger>
						<TabsTrigger value='Inbound'>Inbound Campaigns</TabsTrigger>
						<TabsTrigger value='Outbound'>Outbound Campaigns</TabsTrigger>
					</TabsList>
					<CreateCampaignModal onCampaignCreated={fetchCampaigns} />
				</div>
				<TabsContent value='all'>
					<div className='sticky top-0 my-8 self-stretch flex flex-row items-center justify-start gap-4 max-w-full text-lg text-text-main-900'>
						<div className='  h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden  flex flex-row items-center justify-center p-3 box-border'>
							<Phone className='w-[18px] h-[18px] stroke-prime-base' />
						</div>
						<div className='flex-1 flex flex-col items-start justify-start gap-1 max-w-full mq800:min-w-full'>
							<h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
								All Campaigns
							</h3>
							<div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
								Manage your integrations to enhance and automate your workflow.
							</div>
						</div>
					</div>
					<section className=' self-stretch flex flex-col items-start justify-start max-w-full'>
						<div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4   gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
							{campaigns.map((campaign, index) => (
								<CampaignCo
									key={index}
									CampaignName={campaign.campaignName}
									CampaignDescription={campaign.campaignDescription}
									CampaignType={campaign.campaignType}
									StartedOn={new Date(campaign.createdAt).toLocaleDateString(
										'en-US',
										{ day: '2-digit', month: 'short', year: '2-digit' }
									)}
									EndsOn={new Date(campaign.createdAt).toLocaleDateString(
										'en-US',
										{ day: '2-digit', month: 'short', year: '2-digit' }
									)}
									CompletedCalls={campaign.completedCalls || 0}
									ScheduledCalls={campaign.scheduledCalls || 0}
									AnsweredCalls={campaign.answeredCalls || 0}
									TotalCalls={campaign.totalCalls || 0}
								/>
							))}
						</div>
					</section>
				</TabsContent>
				<TabsContent value='Inbound'>
					<div className=' my-8 self-stretch flex flex-row flex-wrap items-center justify-start gap-3.5 max-w-full text-lg text-text-main-900'>
						<div className='h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border'>
							<PhoneIncoming className='w-[18px] h-[18px] stroke-prime-base' />
						</div>
						<div className='flex-1 flex flex-col items-start justify-start gap-1 min-w-[684px] max-w-full mq800:min-w-full'>
							<h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
								Inbound
							</h3>
							<div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
								Manage your integrations to enhance and automate your workflow.
							</div>
						</div>
					</div>
					<section className='self-stretch flex flex-col items-start justify-start max-w-full'>
						<div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4  gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
							{campaigns
								.filter((campaign) => campaign.campaignType === 'Inbound')
								.map((campaign, index) => (
									<CampaignCo
										key={index}
										CampaignName={campaign.campaignName}
										CampaignDescription={campaign.campaignDescription}
										CampaignType={campaign.campaignType}
										StartedOn={new Date(campaign.createdAt).toLocaleDateString(
											'en-US',
											{ day: '2-digit', month: 'short', year: '2-digit' }
										)}
										EndsOn={new Date(campaign.createdAt).toLocaleDateString(
											'en-US',
											{ day: '2-digit', month: 'short', year: '2-digit' }
										)}
										CompletedCalls={campaign.completedCalls || 0}
										ScheduledCalls={campaign.scheduledCalls || 0}
										AnsweredCalls={campaign.answeredCalls || 0}
										TotalCalls={campaign.totalCalls || 0}
									/>
								))}
						</div>
					</section>
				</TabsContent>
				<TabsContent value='Outbound'>
					<div className=' my-8 self-stretch flex flex-row flex-wrap items-center justify-start gap-3.5 max-w-full text-lg text-text-main-900'>
						<div className='h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border'>
							<PhoneOutgoing className='w-[18px] h-[18px] stroke-prime-base' />
						</div>
						<div className='flex-1 flex flex-col items-start justify-start gap-1 min-w-[684px] max-w-full mq800:min-w-full'>
							<h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
								Outbound
							</h3>
							<div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
								Manage your integrations to enhance and automate your workflow.
							</div>
						</div>
					</div>
					<section className='self-stretch flex flex-col items-start justify-start max-w-full'>
						<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4  gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
							{campaigns
								.filter((campaign) => campaign.campaignType === 'Outbound')
								.map((campaign, index) => (
									<CampaignCo
										key={index}
										CampaignName={campaign.campaignName}
										CampaignDescription={campaign.campaignDescription}
										CampaignType={campaign.campaignType}
										StartedOn={new Date(campaign.createdAt).toLocaleDateString(
											'en-US',
											{ day: '2-digit', month: 'short', year: '2-digit' }
										)}
										EndsOn={new Date(campaign.createdAt).toLocaleDateString(
											'en-US',
											{ day: '2-digit', month: 'short', year: '2-digit' }
										)}
										CompletedCalls={campaign.completedCalls || 0}
										ScheduledCalls={campaign.scheduledCalls || 0}
										AnsweredCalls={campaign.answeredCalls || 0}
										TotalCalls={campaign.totalCalls || 0}
									/>
								))}
						</div>
					</section>
				</TabsContent>
			</Tabs>
			{/* <div className='h-[1234px] bg-red-400 w-full'></div> */}
		</div>
	);
}
