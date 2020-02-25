import React from 'react'
export default React.memo(({setCount, valuecount,inputRef }) => {
 
  return (
    <React.Fragment>
         <input
              id="range-input"
              type="range"
              value={valuecount}
              onChange={e => setCount(e.target.value)}
            />
    
    </React.Fragment>
  )
})