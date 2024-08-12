import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BadgePlus, PhoneIncoming, PhoneOutgoing, X } from 'lucide-react';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function CreateCampaignModal() {
	return (
		<div className=''>
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent className='p-0 items-center justify-center min-w-[800px] w-[800px] rounded-[20px] '>
					<div className=' w-[800px] shadow-[0px_2px_4px_rgba(27,_28,_29,_0.04)] rounded-[20px] bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border max-w-full overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal] text-left text-sm text-text-main-900 font-paragraph-x-small'>
						<div className='self-stretch bg-bg-white-0 overflow-x-auto flex flex-row items-center justify-start py-4 pl-4 pr-6 gap-3.5'>
							<div className='h-10 w-10 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-full bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px]'>
								<BadgePlus className='stroke-icon-sub-500' />
							</div>
							<div className='flex-1 flex flex-col items-start justify-start gap-1'>
								<div className='self-stretch relative tracking-[-0.01em] leading-[20px] font-medium text-text'>
									Create a Campaign
								</div>

								<div className='self-stretch relative text-xs leading-[16px] text-text-sub-500'>
									Create a Campaign and so sand so
								</div>
							</div>
						</div>
						<Separator />
						<section className='self-stretch bg-bg-white-0 flex flex-col items-start justify-start p-4 box-border gap-4 max-w-full text-left text-sm text-text-main-900 font-paragraph-x-small'>
							<div className='grid flex-1 w-full  items-center gap-1.5'>
								<Label htmlFor='picture'>
									Name of the Campaign
									<div className='relative mx-1 tracking-[-0.01em] leading-[20px] font-medium text-primary-base inline-block min-w-[8px] mq600:w-full mq600:h-2'>
										*
									</div>
								</Label>
								<Input id='picture' type='text' placeholder='yo pops doom...' />
							</div>

							<Label
								htmlFor='picture3'
								className='self-stretch flex flex-col items-start justify-start gap-1 max-w-full'>
								<div className='self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[418px] gap-px mq450:pr-5 mq450:box-border mq600:flex-wrap mq600:pr-[209px] mq600:box-border'>
									<div className='relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[76px]'>
										Description
									</div>
									<div className='relative tracking-[-0.01em] leading-[20px] text-text-sub-500 inline-block min-w-[65px]'>
										(Optional)
									</div>
								</div>
								<Textarea id='picture3' placeholder='Type your message here.' />
							</Label>

							<RadioGroup className='self-stretch flex flex-col items-start justify-start gap-1'>
								<Label className='self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[393px] gap-px mq450:pr-5 mq450:box-border mq600:flex-wrap mq600:pr-[196px] mq600:box-border'>
									<div className='relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[101px]'>
										Campaign type
									</div>
									<div className='relative tracking-[-0.01em] leading-[20px] font-medium text-primary-base inline-block min-w-[8px] mq600:w-full mq600:h-2'>
										*
									</div>
								</Label>
								<div className='self-stretch flex flex-row flex-wrap items-start justify-start gap-4'>
									<Label
										htmlFor='comfortable123'
										className='flex-1 rounded-xl bg-bg-white-0 border-primary-base border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 px-[15px] gap-3.5 min-w-[187px]'>
										<div className='h-10 w-10 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-full bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px]'>
											<PhoneIncoming className='stroke-icon-sub-500 w-3.5 h-3.5' />
										</div>
										<div className='flex-1 flex flex-col items-start justify-start gap-1'>
											<div className='self-stretch flex flex-row items-center justify-start gap-1'>
												<div className='relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[55px]'>
													Inbound
												</div>
												<div className='w-[58px] relative text-xs leading-[16px] text-text-sub-500 hidden'>
													(Sublabel)
												</div>
											</div>
											<div className='self-stretch relative text-xs leading-[16px] text-text-sub-500'>
												Receive a one-time verification code via SMS to enter
												during login.
											</div>
										</div>
										<RadioGroupItem
											value='comfortable123'
											id='comfortable123'
										/>
									</Label>
									<Label
										htmlFor='compact123'
										className='flex-1 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-xl bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 px-[15px] gap-3.5 min-w-[187px]'>
										<div className='h-10 w-10 shadow-[0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-full bg-bg-white-0 border-stroke-soft-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[9px]'>
											<PhoneOutgoing className='stroke-icon-sub-500 w-3.5 h-3.5' />
										</div>
										<div className='flex-1 flex flex-col items-start justify-start gap-1'>
											<div className='self-stretch flex flex-row items-center justify-start'>
												<div className='flex-1 relative tracking-[-0.01em] leading-[20px] font-medium'>
													Outbound
												</div>
											</div>
											<div className='self-stretch relative text-xs leading-[16px] text-text-sub-500'>
												Use an authenticator app to generate time-based
												verification codes for login.
											</div>
										</div>
										<RadioGroupItem value='compact123' id='compact123' />
									</Label>
								</div>
							</RadioGroup>
						</section>

						<Separator />
						<div className='self-stretch bg-bg-white-0 flex flex-row flex-wrap items-start justify-start p-4 gap-4'>
							<Button variant='outline' className='flex-1'>
								Cancel
							</Button>
							<Button className='flex-1'>Create</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
