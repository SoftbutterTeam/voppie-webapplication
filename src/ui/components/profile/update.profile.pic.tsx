/* eslint-disable react-hooks/exhaustive-deps */
import {
  ClockIcon,
  CloudUploadIcon,
  EyeIcon,
  MinusIcon,
  PlusIcon,
  ScissorsIcon,
  XIcon,
} from "@heroicons/react/outline";
import Cropper from "react-easy-crop";
import React, { useCallback, useState } from "react";
import getCroppedImg from "../../../utils/getCroppedImg";
import { motion } from "framer-motion";

function UpdateProfilePicture({
  setTempProfilePic,
  setProfileImage,
  tempProfilePic,
  setShow,
  inputRef,
}: any) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<any>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const sliderRef = React.createRef<HTMLInputElement>();

  const zoomOut = () => {
    sliderRef.current?.stepDown();
    setZoom(sliderRef?.current?.value);
  };
  const zoomIn = () => {
    sliderRef.current?.stepUp();
    setZoom(sliderRef?.current?.value);
  };

  const getCroppedImage = useCallback(
    async (crop) => {
      try {
        const img = await getCroppedImg(tempProfilePic, croppedAreaPixels);
        if (crop === "crop") {
          setZoom(1);
          setCrop({ x: 0, y: 0 });

          setTempProfilePic(img);
          console.log(`show`);
        } else {
          console.log(`img`, img);
          setTempProfilePic(img);
          setProfileImage(img);
          setShow(false);
          return img;
        }
      } catch (error) {
        console.log(`error`, error);
      }
    },
    [croppedAreaPixels]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="fixed  inset-x-0 top-20  m-auto  w-[700px] min-h-[228px] h-5/6  bg-white shadow-md rounded-md"
    >
      <div className="relative flex item-center justify-around text-base font-poppins px-4 py-6 border-b-2 border-gray-100">
        <span>Update Profile Picture</span>
        <div
          onClick={() => {
            setShow(false);
          }}
          className="h-7 w-7 rounded-full hover:bg-gray-200 bg-gray-100 absolute right-4 flexCenter duration-300 cursor-pointer"
        >
          <XIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="relative h-[400px] w-full flexCenter">
        <div className="relative flex justify-center h-[300px] w-full">
          <Cropper
            image={tempProfilePic}
            crop={crop}
            cropShape="round"
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
          />
        </div>

        <div className="absolute -bottom-5 w-full flexCenter">
          <div
            className="w-9 h-9 flexCenter rounded-full cursor-pointer hover:bg-gray-200 mr-3 gap-5 duration-200"
            onClick={() => zoomOut()}
          >
            <MinusIcon className="w-5 h-5" />
          </div>
          <input
            type="range"
            min={1}
            step={0.2}
            ref={sliderRef}
            max={3}
            value={zoom}
            onChange={(e: any) => setZoom(e.target.value)}
            className="w-1/2 h-1 bg-[#ced0d4] rounded-lg appearance-none outline-none cursor-pointer dark:bg-gray-700"
          />
          <div
            className="w-9 h-9 flexCenter rounded-full cursor-pointer hover:bg-gray-200 ml-3 duration-200"
            onClick={() => zoomIn()}
          >
            <PlusIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flexCenter gap-4 mt-8">
        <button
          onClick={() => getCroppedImage("crop")}
          className="flex  items-center gap-2 duration-300 bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-md cursor-pointer text-white font-poppins"
        >
          <ScissorsIcon className="w-5 h-5" /> Crop photo
        </button>

        <button
          onClick={() => inputRef.current?.click()}
          className="flex  items-center gap-2 duration-300 bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-md cursor-pointer text-white font-poppins"
        >
          <CloudUploadIcon className="w-5 h-5" /> Upload new photo
        </button>
      </div>

      <div className="flex items-center gap-3 p-4 text-base border-b-2 border-gray-100 ">
        <EyeIcon className="w-5 h-5" /> Your profile picture is public
      </div>
      <div className="absolute bottom-4 right-6 flex items-center gap-4">
        <button className="flex w-full items-center gap-2 duration-300 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer text-black font-poppins">
          Cancel
        </button>
        <button
          onClick={() => getCroppedImage("no-show")}
          className="flex w-full items-center gap-2 duration-300 bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-md cursor-pointer text-white font-poppins"
        >
          Save
        </button>
      </div>
    </motion.div>
  );
}

export default UpdateProfilePicture;
