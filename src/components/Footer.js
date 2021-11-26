
export default function Footer(){
    return(
        <div className=" bg-gray-dark">
                <footer>
                <div className="flex flex-row ml-10 h-20 py-7 w-max">
                <p>© 2021 Skyrats.</p>
                </div>
                </footer>
                

                <div className="flex flex-row justify-items-end bg-gray w-max">
                <img src="/images/insta_icon.png" width="40" height="40" alt="insta_icon"  />
                <img src="/images/facebook_icon.png" width="40" height="40" alt="insta_icon"  />
                </div>
                
        </div>
    );

}