import React from 'react'
import "./switchTabs.scss"

const SwitchTabs = ({data,onTabChange}) => {

  const [selectedTab,setSelectedTab]=React.useState(0);
  const [left,setLeft]=React.useState(0);

  const activeTab=(tab,index)=>{
    setLeft(index*100);
    setTimeout(() => {
      setSelectedTab(index);
    },300);
    onTabChange(index,tab);
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index)=>(
          <span 
          key={index} 
          className={`tabItem ${selectedTab===index?"active":""}`}
          onClick={()=>{activeTab(tab,index)}}
          >
            {tab}
            </span>
        ))}
        <span className="movingBg"  style={{left}}/>
      </div>
    </div>
    
  )
}

export default SwitchTabs