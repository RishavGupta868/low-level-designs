import React from 'react'
import YoutubeVideo from './YoutubeVideo'
import ChatContainer from './ChatContainer'

const LiveChat = () => {
  return (
    <div className='flex m-2'>
      <YoutubeVideo/>
      <ChatContainer/>
    </div>
  )
}

export default LiveChat
