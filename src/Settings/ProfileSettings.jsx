import { useState } from 'react';

function ProfileSettings() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSaveProfile = () => {
    const formData = new FormData();
    formData.append('image', image);

    fetch('/api/update-profile', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Profile Settings</h1>
      <form>
        <div>
          <label htmlFor='image'>Profile Image:</label>
          <input type='file' id='image' onChange={handleImageUpload} />
        </div>
        <button type='button' onClick={handleSaveProfile}>
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
