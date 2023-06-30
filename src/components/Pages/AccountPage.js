import React from 'react'

export default function AccountPage() {
  const getLaout = {
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width:'100%',
    
}
  return (
    <div className='container' style={getLaout}>
        <h1>Welcome To Your Account</h1>
        <iframe src="https://giphy.com/embed/o75ajIFH0QnQC3nCeD" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theoffice-o75ajIFH0QnQC3nCeD"></a></p>
    </div>
  )
}
