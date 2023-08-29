import React, { useState } from 'react'
import './SettingsAvatar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Avatar from 'react-avatar-edit'

const SettingsAvatar = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imgCrop, setImgCrop] = useState<any>(false);
  const [storeImage, setStoreImage] = useState<Array<{ imgCrop: any }>>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file || null)
  }


  const onCrop = (view: any) => {
    setImgCrop(view);
  }
  const onClose = () => {
    setImgCrop(null)
  }

  const saveImage = () => {
    setStoreImage([...storeImage, {imgCrop}])
  }


  const profileImageShow = storeImage.map(item => item.imgCrop);

  return (
    <div className='settings-avatar'>
      <h4>Avatar</h4>

      {profileImageShow.length ===0  ? (
        // <label htmlFor='avatarInput' className='settings-avatar-container'>
          <div className='settings-avatar-icon'>
            {/* <FontAwesomeIcon icon={faUser} id='settings-avatar-user' /> */}

          <Avatar width={300} height={450} onClose={() => onClose} onCrop={onCrop} />
            <div>
              <button onClick={saveImage}> Upload</button>
              </div>
          </div>
        // </label>
      ) : (
        <div className='settings-avatar-image'>
            <img
              // src={URL.createObjectURL(selectedFile)} 
              src={imgCrop}
              alt='file'

            />
            <div onClick={() => setStoreImage([]) }>
               <button> Select Avatar</button>
              </div>
      
          
        </div>
      )}

      <div className='settings-avatar-button'>
        <input
          type='file'
          accept='image/*'
          id='avatarInput'
          onChange={handleFileChange}
        />
        {/* <button className="btn btn-secondary" >Select Avatar</button> */}
      </div>
    </div>
  )
}

export default SettingsAvatar
