import React from 'react'
import {BsStars} from "react-icons/bs"
import TweetBox from './TweetBox'
import Profile from "../assets/profile.jpg"
import Post from './Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll scrollbar-hide`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
  {
    displayName: "Aman",
    userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
    avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: 'gm',
    isProfileImageNFT: false,
    timeStamp: '2020-09-14T12:00:00:000Z'
  },
  {
    displayName: "Rihan",
    userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
    avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: 'gm',
    isProfileImageNFT: false,
    timeStamp: '2016-06-12'
  },
  {
    displayName: "Farhan",
    userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
    avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: 'gm',
    isProfileImageNFT: false,
    timeStamp: '2022-09-01T12:00:00:0002'
  },
  {
    displayName: "Arsh",
    userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
    avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: 'gm',
    isProfileImageNFT: false,
    timeStamp: '2022-09-01T12:00:00:0002'
  },
  {
    displayName: "AAhil",
    userName: '0xN9NF000FNNBBA9990023NNNFS0ASFNAS0SAF0',
    avatar: "https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: 'gm',
    isProfileImageNFT: false,
    timeStamp: '2016-06-30 09:20:00Z'
  },
]


const Feed = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
          <Post key={index}
           displayName={tweet.displayName}
           userName={`${tweet.userName.slice(0,4)}...${tweet.userName -4}`} 
           avatar={tweet.avatar} 
           text={tweet.text} 
           isProfileImageNFT={tweet.isProfileImageNFT} 
           timeStamp={tweet.timeStamp}  />
        ) )}
    </div>
  )
}

export default Feed