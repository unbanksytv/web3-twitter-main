import React, {useContext, useEffect, useState} from 'react'
import {BsArrowLeftShort} from "react-icons/bs"
import {useRouter} from "next/router"

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[5rem] rounded-full mt-[-2rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }

const ProfileHeader = () => {
    const [currentAccount, setCurrentAccount] = useState('0x823233423423423421341241234123442342343')
    const router = useRouter()
    const isProfileImageNFT = false;

  return (
    <div className={style.wrapper}>
        <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}>
                    <BsArrowLeftShort />
            </div>
            <div className={style.details}>
                <div className={style.primary}>Aman Abbasi</div>
                <div className={style.secondary}>Tweets</div>
            </div>
        </div>

        <div className={style.coverPhotoContainer}>
            <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="cover" className={style.coverPhoto}/>
        </div>
        <div className={style.profileImageContainer}>
            <div className={isProfileImageNFT ? 'hex' : style.profileImageContainer}>
                <img src="https://pbs.twimg.com/profile_images/1520080050229768192/c3HQs0_w_400x400.jpg" className={isProfileImageNFT ? style.profileImageNft : style.profileImage} alt="" />
            </div>
        </div>

        <div className={style.details}>
            <div>
                <div className={style.primary}>Aman Abbasi</div>
            </div>
            <div className={style.secondary}>
            {currentAccount && (
            <>
              @{currentAccount.slice(0, 5)}...{currentAccount.slice(37)}
            </>
          )}
            </div>
        </div>
        <div className={style.nav}>
            <div className={style.activeNav}>Tweets</div>
            <div>Tweets & Replies</div>
            <div>Media</div>
            <div>Likes</div>
        </div>
    </div>
  )
} 

export default ProfileHeader