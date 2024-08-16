import React from 'react'
import CampaignPageCo from '@/components/Campaign/campaignpage'
import { currentUser } from '@clerk/nextjs/server'

const CampaignsPage = async () => {
	const user = await currentUser()
	return (
	  <CampaignPageCo/>
  )
}

export default CampaignsPage
