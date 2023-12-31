import { useState } from "react";
import CloudinaryMultiImage from "../../lib/CloudinaryMultiImage";



function ImageUpload({ onChange }) {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);


  const handleImageUpload = (e) => {
    if (files.length > 0 && files.length + images.length < 5) {
      setUploading(true);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(CloudinaryMultiImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setImages([...images, urls]);
          onChange(urls); // Pass the array of images to the onChange handler
          setUploading(false);
          
        })
        .catch((err) => {
          console.log("Image upload failed ");
          setUploading(false);
        });
    } else {
      console.log("u can only upload 4 photos");
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setFiles(e.target.files);
        }}
        className="
        relative
        cursor-pointer
        hover:opacity-70
        transition
        border-dashed
        border-2
        p-20
        border-neutral-300
        flex
        flex-wrap
        items-center
        gap-4
        text-neutral-600
      "
        type="file"
        multiple
        accept="images/*"
      />
        {images.map((imageUrl, index) => (
          <div key={index} className="absolute inset-0 w-1/4 h-full">
            <img
              src={imageUrl}
              alt="House"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </div>
        ))}
   
      <button
        type="button"
        disabled={uploading}
        onClick={handleImageUpload}
        className="bg-black text-white rounded-lg p-3 mx-2"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default ImageUpload;
