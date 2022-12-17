import React from 'react'

const Message = ({ children, type }) => {
  
  return <div className={`my-alert ${type}`}>{children}</div>;
}

export default Message;