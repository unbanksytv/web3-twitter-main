import React, {useState, useEffect} from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }


const tweets = [
    {
      displayName: "Aman Abbasi",
      userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
      avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: 'gm',
      isProfileImageNFT: false,
      timeStamp: '2020-09-14T12:00:00:000Z'
    },
    {
      displayName: "Aman Abbasi",
      userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
      avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: 'gm',
      isProfileImageNFT: false,
      timeStamp: '2016-06-12'
    },
    {
      displayName: "Aman Abbasi",
      userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
      avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: 'gm',
      isProfileImageNFT: false,
      timeStamp: '2022-09-01T12:00:00:0002'
    },
    {
      displayName: "Aman Abbasi",
      userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
      avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: 'gm',
      isProfileImageNFT: false,
      timeStamp: '2022-09-01T12:00:00:0002'
    },
    {
      displayName: "Aman Abbasi",
      userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
      avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: 'Day 1 of #100daysofcode. Learning about the fundamentals of Solidity.',
      isProfileImageNFT: false,
      timeStamp: '2016-06-30 09:20:00Z'
    },
  ]
  

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets.map((tweet, index) => (
            <Post key={index} displayName={tweet.displayName} userName={`${tweet.userName.slice(0,4)}...${tweet.userName -4}`} avatar={tweet.avatar} text={tweet.text} isProfileImageNFT={tweet.isProfileImageNFT} timestamp={tweet.timeStamp} />
        ))}
    </div>
  )
}

export default ProfileTweets