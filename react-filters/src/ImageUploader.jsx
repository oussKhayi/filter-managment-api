import React, { useState } from "react";

const ImageUploader = () => {
    const [base64Image, setBase64Image] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // The result property contains the base64-encoded string
                const base64String = reader.result;
                setBase64Image(base64String);
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
        console.log(base64Image);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {base64Image && <img src={base64Image} alt="Preview" />}
        </div>
    );
};

export default ImageUploader;
