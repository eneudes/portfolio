"use client";
import {InstagramLogo,LinkedinLogo,GithubLogo, Envelope} from "@phosphor-icons/react"
import './socialBtns.scss'
export default function SocialBtn() {
  return(
      <div className="social">
        <a href="http://"><InstagramLogo size={20} /></a>
        <a href="http://"><LinkedinLogo size={20}/></a>
        <a href="http://"><GithubLogo size={20}/></a>
        <a href="http://"><Envelope size={20}/></a>
      </div>
  )
};
