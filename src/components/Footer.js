import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex flex-row bg-gray-dark w-full pb-7 h-35">
            <div className="pt-5 ml-12">
            <p>© 2021 Skyrats.</p>
            </div>

        <div className="absolute right-0 origin-bottom-right flex flex-row justify-center ">
            <div className="pt-5 pr-12"> 
                <a href="mailto:equipeskyrats@gmail.com">
                    <img src="/images/email_icon.png" width="40" height="40" alt="email_icon"/>
                </a>
            </div>
            <div className="pt-5 pr-12"> 
                <a href="https://www.instagram.com/skyrats_drones/">
                    <img src="/images/insta_icon.png" width="40" height="40" alt="insta_icon"/>
                </a>
            </div>
            <div className="pt-5 pr-12">
                <a href="https://www.facebook.com/skyrats">    
                    <img src="/images/facebook_icon.png" width="40" height="40" alt="face_icon"  />
                </a>
            </div>
            <div className="pt-5 pr-12"> 
                <a href="https://www.linkedin.com/company/skyrats">  
                    <img src="/images/linkedin_icon.png" width="40" height="40" alt="linkedin_icon"  />
                </a>
            </div>
            <div className="pt-5 pr-12">
                <a href="https://github.com/Skyrats">
                    <img src="/images/github_icon.png" width="40" height="40" alt="github_icon"  />
                </a>
            </div>
        </div>

        </div>
    );

}