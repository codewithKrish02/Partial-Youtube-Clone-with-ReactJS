import React from 'react';
import './MainContainer.css';
import VideoCard from './VideoCard';
function MainContainer() {
    return (
        <div className='maincontainer'>
            <h2 className='maincontainer__title'>Recommended</h2>
            <div className='maincontainer__videos'>
                <VideoCard channelImageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFl1PKn1vnu2g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=5_Z09I0B0_17aQWPCTGx4K8Bo-utrryhnsk-qtTRE1w' postedDate='3 days ago' noOfViews='5M Views' channelName='codewithKrish' title='Test Video' thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg' / >
                <VideoCard channelImageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFl1PKn1vnu2g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=5_Z09I0B0_17aQWPCTGx4K8Bo-utrryhnsk-qtTRE1w' postedDate='3 days ago' noOfViews='5M Views' channelName='codewithKrish' title='Test Video' thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg' / >
                <VideoCard isCustom channelImageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFl1PKn1vnu2g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=5_Z09I0B0_17aQWPCTGx4K8Bo-utrryhnsk-qtTRE1w' postedDate='3 days ago' noOfViews='5M Views' channelName='codewithKrish' title='Test Video' thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg' / >
                <VideoCard channelImageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFl1PKn1vnu2g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=5_Z09I0B0_17aQWPCTGx4K8Bo-utrryhnsk-qtTRE1w' postedDate='3 days ago' noOfViews='5M Views' channelName='codewithKrish' title='Test Video' thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg' / >
                <VideoCard channelImageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFl1PKn1vnu2g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=5_Z09I0B0_17aQWPCTGx4K8Bo-utrryhnsk-qtTRE1w' postedDate='3 days ago' noOfViews='5M Views' channelName='codewithKrish' title='Test Video' thumbnailUrl='https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg' / >
            </div>
        </div>   
        
    )
}

export default MainContainer;
