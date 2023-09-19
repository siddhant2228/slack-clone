import React , {useEffect, useState} from 'react'
import './Sidebar.css'
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import { Create} from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import db from './firebase'
import { useStateValue } from './StateProvider'

const Sidebar = () => {
    const [channels , setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=> {

      db.collection('rooms').onSnapshot(snapshot => 
        setChannels(
          snapshot.docs.map( doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
        )
      );

    } , [])

   

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
      <div className="sidebar__info">

        <h2> Siddhant Singh(SS) </h2>

        <h3> 
         <FiberManualRecord  />
         { user?.displayName} 
      </h3>
    
      </div>
      
    
    <Create />
  </div>

    <SidebarOption Icon={InsertComment} title="Threads" />
    <SidebarOption Icon={ Inbox } title="Mention & reactions" />
    <SidebarOption Icon={Drafts} title="Saved items" />
    <SidebarOption Icon={BookmarkBorder } title="Channel browser" />
    <SidebarOption Icon={PeopleAlt } title="people & user groups" />
    <SidebarOption Icon={Apps} title="Apps" />
    <SidebarOption Icon={FileCopy} title="File browser" />
    <SidebarOption Icon={ExpandLess} title="Show less" />
    <hr />
    <SidebarOption Icon={ExpandMore} title="Channels" />
    <hr />
    <SidebarOption Icon={Add} title ="Add Channel"  addChannelOption ="Add Channel"  />
    
     {channels.map(channel =>(
         <SidebarOption title = {channel.name} id ={channel.id} />

     ))}
    

  </div>
  );
}

export default Sidebar
