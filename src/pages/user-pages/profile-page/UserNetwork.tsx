import React, { useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserNetwork.css'
import UserNetworkNav from '../../../components/user/UserNetworkNav'
import Following from '../../../components/user/Following'
import Followers from '../../../components/user/Followers'
import Blocked from '../../../components/user/Blocked'

const UserNetwork = ({data}:{data:IUser| undefined}) => {
 
    const[activeSection, setActiveSection]  = useState("following")

    return (
        <section>
            <div className="user-nav">
                <UserNetworkNav activeSection={activeSection} onSectionChange={setActiveSection} />
                </div>
            <div>
                {
                    activeSection === 'following' && (
                        
                           <Following data={data}/>
                        
                    )
                }
            </div>
            <div>
                {
                    activeSection === "followers" && (
                        <Followers data={data}/>
                    )
                }
            </div>
            <div>
                {
                    activeSection === "blocked" && (
                        <Blocked data = {data}/>
                    )
                }
             </div>
      </section>
   
  )
}

export default UserNetwork