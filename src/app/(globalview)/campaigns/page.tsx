import CampaignCo from "@/components/Campaign/campaigndisplay";
import { HeaderCustom, HeaderIcon, HeaderSubtitle, HeaderTitle } from "@/components/custom/Header";
import { BrainCircuit } from "lucide-react";

const campaigns = [
    {
      "CampaignName": "Agent Red for Slack Comm",
      "CampaignDescription": "For team communication and real-time collab. Payment from stock investments. For team communi and realfukyu dytun6en",
      "CampaignType": "OutBound",
      "StartedOn": "22 Dec 2020",
      "EndsOn": "22 Dec 2024",
      "CompletedCalls": 9000,
      "ScheduledCalls": 6000,
      "AnsweredCalls": 2000,
      "TotalCalls": 6000
    },
    {
      "CampaignName": "BlueWave for Team Connect",
      "CampaignDescription": "Enhancing team communication through innovative solutions. Focused on real-time updates and seamless integration.",
      "CampaignType": "InBound",
      "StartedOn": "10 Jan 2021",
      "EndsOn": "10 Jan 2025",
      "CompletedCalls": 8500,
      "ScheduledCalls": 5000,
      "AnsweredCalls": 3000,
      "TotalCalls": 5000
    },
    {
      "CampaignName": "GreenLight for Growth",
      "CampaignDescription": "Boosting business growth through targeted outreach and strategic planning.",
      "CampaignType": "OutBound",
      "StartedOn": "15 Feb 2021",
      "EndsOn": "15 Feb 2025",
      "CompletedCalls": 7000,
      "ScheduledCalls": 4500,
      "AnsweredCalls": 2500,
      "TotalCalls": 4500
    },
    {
      "CampaignName": "YellowBrick Roadmap",
      "CampaignDescription": "Creating a clear path to success with our comprehensive roadmap services.",
      "CampaignType": "InBound",
      "StartedOn": "20 Mar 2021",
      "EndsOn": "20 Mar 2025",
      "CompletedCalls": 9200,
      "ScheduledCalls": 5800,
      "AnsweredCalls": 3400,
      "TotalCalls": 5800
    },
    {
      "CampaignName": "OrangeHorizon Expansion",
      "CampaignDescription": "Expanding horizons with innovative solutions and strategic outreach.",
      "CampaignType": "OutBound",
      "StartedOn": "25 Apr 2021",
      "EndsOn": "25 Apr 2025",
      "CompletedCalls": 8000,
      "ScheduledCalls": 5500,
      "AnsweredCalls": 2500,
      "TotalCalls": 5500
    },
    {
      "CampaignName": "PurplePeak Performance",
      "CampaignDescription": "Maximizing performance through effective communication and collaboration.",
      "CampaignType": "InBound",
      "StartedOn": "30 May 2021",
      "EndsOn": "30 May 2025",
      "CompletedCalls": 8800,
      "ScheduledCalls": 5200,
      "AnsweredCalls": 3600,
      "TotalCalls": 5200
    },
    {
      "CampaignName": "BlackBox Solutions",
      "CampaignDescription": "Offering innovative solutions to complex problems through strategic planning.",
      "CampaignType": "OutBound",
      "StartedOn": "05 Jun 2021",
      "EndsOn": "05 Jun 2025",
      "CompletedCalls": 7500,
      "ScheduledCalls": 4800,
      "AnsweredCalls": 2700,
      "TotalCalls": 4800
    },
    {
      "CampaignName": "WhiteWave Collaboration",
      "CampaignDescription": "Facilitating collaboration and communication through state-of-the-art tools.",
      "CampaignType": "InBound",
      "StartedOn": "10 Jul 2021",
      "EndsOn": "10 Jul 2025",
      "CompletedCalls": 9300,
      "ScheduledCalls": 6100,
      "AnsweredCalls": 3200,
      "TotalCalls": 6100
    },
    {
      "CampaignName": "RedRock Strategies",
      "CampaignDescription": "Developing strategies for business growth and market expansion.",
      "CampaignType": "OutBound",
      "StartedOn": "15 Aug 2021",
      "EndsOn": "15 Aug 2025",
      "CompletedCalls": 7800,
      "ScheduledCalls": 4900,
      "AnsweredCalls": 2900,
      "TotalCalls": 4900
    },
    {
      "CampaignName": "BlueSky Networking",
      "CampaignDescription": "Enhancing networking opportunities through innovative solutions.",
      "CampaignType": "InBound",
      "StartedOn": "20 Sep 2021",
      "EndsOn": "20 Sep 2025",
      "CompletedCalls": 8600,
      "ScheduledCalls": 5700,
      "AnsweredCalls": 2900,
      "TotalCalls": 5700
    },
    {
      "CampaignName": "GreenField Expansion",
      "CampaignDescription": "Expanding market reach with strategic outreach and communication.",
      "CampaignType": "OutBound",
      "StartedOn": "25 Oct 2021",
      "EndsOn": "25 Oct 2025",
      "CompletedCalls": 7200,
      "ScheduledCalls": 4600,
      "AnsweredCalls": 2600,
      "TotalCalls": 4600
    },
    {
      "CampaignName": "YellowStone Initiative",
      "CampaignDescription": "Initiating strategic plans to enhance business growth and communication.",
      "CampaignType": "InBound",
      "StartedOn": "30 Nov 2021",
      "EndsOn": "30 Nov 2025",
      "CompletedCalls": 9400,
      "ScheduledCalls": 6000,
      "AnsweredCalls": 3400,
      "TotalCalls": 6000
    },
    {
      "CampaignName": "OrangeSunrise Solutions",
      "CampaignDescription": "Providing innovative solutions for business communication and growth.",
      "CampaignType": "OutBound",
      "StartedOn": "05 Dec 2021",
      "EndsOn": "05 Dec 2025",
      "CompletedCalls": 8100,
      "ScheduledCalls": 5400,
      "AnsweredCalls": 2700,
      "TotalCalls": 5400
    },
    {
      "CampaignName": "PurpleWave Performance",
      "CampaignDescription": "Enhancing performance through effective communication and collaboration.",
      "CampaignType": "InBound",
      "StartedOn": "10 Jan 2022",
      "EndsOn": "10 Jan 2026",
      "CompletedCalls": 8700,
      "ScheduledCalls": 5900,
      "AnsweredCalls": 2800,
      "TotalCalls": 5900
    },
    {
      "CampaignName": "BlackRock Strategies",
      "CampaignDescription": "Developing innovative strategies for market expansion and business growth.",
      "CampaignType": "OutBound",
      "StartedOn": "15 Feb 2022",
      "EndsOn": "15 Feb 2026",
      "CompletedCalls": 7900,
      "ScheduledCalls": 5300,
      "AnsweredCalls": 2600,
      "TotalCalls": 5300
    },
    {
      "CampaignName": "WhiteStar Collaboration",
      "CampaignDescription": "Facilitating effective collaboration and communication through advanced tools.",
      "CampaignType": "InBound",
      "StartedOn": "20 Mar 2022",
      "EndsOn": "20 Mar 2026",
      "CompletedCalls": 9100,
      "ScheduledCalls": 6200,
      "AnsweredCalls": 2900,
      "TotalCalls": 6200
    },
    {
      "CampaignName": "RedRiver Expansion",
      "CampaignDescription": "Expanding business reach with strategic outreach and innovative solutions.",
      "CampaignType": "OutBound",
      "StartedOn": "25 Apr 2022",
      "EndsOn": "25 Apr 2026",
      "CompletedCalls": 7600,
      "ScheduledCalls": 5100,
      "AnsweredCalls": 2500,
      "TotalCalls": 5100
    },
    {
      "CampaignName": "BlueOcean Networking",
      "CampaignDescription": "Enhancing networking opportunities through strategic planning and communication.",
      "CampaignType": "InBound",
      "StartedOn": "30 May 2022",
      "EndsOn": "30 May 2026",
      "CompletedCalls": 8500,
      "ScheduledCalls": 5800,
      "AnsweredCalls": 2700,
      "TotalCalls": 5800
    },
    {
      "CampaignName": "GreenMountain Growth",
      "CampaignDescription": "Boosting growth with strategic outreach and innovative communication.",
      "CampaignType": "OutBound",
      "StartedOn": "05 Jun 2022",
      "EndsOn": "05 Jun 2026",
      "CompletedCalls": 7100,
      "ScheduledCalls": 4700,
      "AnsweredCalls": 2400,
      "TotalCalls": 4700
    },
    {
      "CampaignName": "YellowSea Initiative",
      "CampaignDescription": "Initiating innovative plans for business communication and growth.",
      "CampaignType": "InBound",
      "StartedOn": "10 Jul 2022",
      "EndsOn": "10 Jul 2026",
      "CompletedCalls": 9300,
      "ScheduledCalls": 6000,
      "AnsweredCalls": 3300,
      "TotalCalls": 6000
    }
  ]
;

export default function Campaignpage() {
    return <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  3xl:grid-cols-4  gap-4 m-4 ">
    {campaigns.map((campaign, index) => (
<CampaignCo
  key={index}
  CampaignName={campaign.CampaignName}
  CampaignDescription={campaign.CampaignDescription}
  CampaignType={campaign.CampaignType}
  StartedOn={campaign.StartedOn}
  EndsOn={campaign.EndsOn}
  CompletedCalls={campaign.CompletedCalls}
  ScheduledCalls={campaign.ScheduledCalls}
  AnsweredCalls={campaign.AnsweredCalls}
  TotalCalls={campaign.TotalCalls}
/>
))}
    </div>
    ;
}