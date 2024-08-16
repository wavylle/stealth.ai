import React from 'react'
import CampaignPageCo from '@/components/Campaign/campaignpage'
import { currentUser } from '@clerk/nextjs/server'

const CampaignsPage = async () => {
	const user = await currentUser()
	if (!user) {
		return <div>You are not logged in</div>
	}
	return (
	  <CampaignPageCo user={user}/>
  )
}

export default CampaignsPage
