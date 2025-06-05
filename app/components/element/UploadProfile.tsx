"use client";
import Image from "next/image";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { REACT_APP_API_URL } from "@/app/config";

export default function UploadProfile(): JSX.Element {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const user = useReactiveVar(userVar);
  const imagePath: string = user?.memberImage
    ? `${REACT_APP_API_URL}/${user?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";

  const avatars = Array.from(
    { length: 30 },
    (_, i) => `/assets/images/avatar/avt-${i + 1}.webp`
  );

  const updateProfileImage = () => {
    if (selectedAvatar) {
      console.log("Profile updated with:", selectedAvatar);
    }
  };

  return (
    <div className="text-center">
      <div
        style={{
          width: "300px",
          margin: "20px auto",
          border: "2px solid #e5e7eb",
          borderRadius: "8px",
          padding: "12px",
          backgroundColor: "#f9fafb",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        {/* Large Image Preview */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            marginBottom: "16px",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            border: "2px solid #d1d5db",
          }}
        >
          <Image
            src={selectedAvatar || imagePath}
            alt="Selected Avatar"
            layout="fill"
            objectFit="cover"
            sizes="300px"
          />
        </div>

        {/* Avatar Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedAvatar(avatar)}
              style={{
                cursor: "pointer",
                borderRadius: "4px",
                overflow: "hidden",
                border:
                  selectedAvatar === avatar ? "2px solid #3b82f6" : "none",
                transition: "transform 0.2s",
                aspectRatio: "1/1",
                width: "100%",
                height: "0",
                paddingBottom: "100%",
                position: "relative",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={avatar}
                  alt={`Avatar ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="50px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={updateProfileImage}
          style={{
            width: "100%",
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "6px",
            fontWeight: "500",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#3b82f6";
          }}
        >
          Update Profile Logo
        </button>
      </div>
    </div>
  );
}
