"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();
  function handleClick() {
    imageRef.current.click();
  }

  function handleImagePick(event) {
    const image = event.target.files[0];

    if (!image) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(image);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked</p>}
          {pickedImage && <Image src={pickedImage} fill alt="image" />}
        </div>
        <input
          className={classes.input}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImagePick}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
