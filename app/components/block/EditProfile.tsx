"use client";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import Image from "next/image";
import { MemberUpdate } from "@/libs/dto/member/member.update";
import { useMutation, useReactiveVar } from "@apollo/client";
import { UPDATE_MEMBER } from "@/apollo/user/mutation";
import { userVar } from "@/apollo/store";
import { Messages, REACT_APP_API_URL } from "@/app/config";
import { updateStorage, updateUserInfo } from "@/app/(auth)";
import { sweetErrorHandling, sweetMixinSuccessAlert } from "@/app/sweetAlert";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";

export default function EditProfile({
  initialValues = {
    _id: "",
    memberImage: "",
    memberNick: "",
    memberPhone: "",
    memberAddress: "",
  },
}: any): JSX.Element {
  const [activeSection, setActiveSection] = useState<
    "followers" | "followings" | "favorites" | null
  >(null);
  const [updateData, setUpdateData] = useState<MemberUpdate>(initialValues);
  const user = useReactiveVar(userVar);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const imagePath: string = user?.memberImage
    ? `${REACT_APP_API_URL}/${user?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";
  const isDark = useDarkModeCheck();

  const avatars = Array.from(
    { length: 30 },
    (_, i) => `/assets/images/avatar/avt-${i + 1}.webp`
  );

  const updateProfileImage = () => {
    if (selectedAvatar) {
      console.log("Profile updated with:", selectedAvatar);
    }
  };

  /** APOLLO REQUESTS **/
  const [updateMember] = useMutation(UPDATE_MEMBER);

  /** LIFECYCLES **/
  useEffect(() => {
    setUpdateData({
      ...updateData,
      memberNick: user.memberNick,
      memberPhone: user.memberPhone,
      memberAddress: user.memberAddress,
      memberImage: user.memberImage,
    });
    console.log("User data updated:", updateData);
  }, [user]);

  /** HANDLERS **/
  const updatePropertyHandler = useCallback(async () => {
    try {
      if (!user._id) throw new Error(Messages.error2);
      updateData._id = user._id;
      const result = await updateMember({
        variables: {
          input: updateData,
        },
      });
      //@ts-ignore
      const jwtToken = result.data.updateMember?.accessToken;
      await updateStorage({ jwtToken });
      updateUserInfo(result.data.updateMember?.accessToken);
      await sweetMixinSuccessAlert("Information updated successfuly");
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  }, [updateData]);

  const doDisabledCheck = () => {
    if (
      updateData.memberNick === "" ||
      updateData.memberPhone === "" ||
      updateData.memberAddress === "" ||
      updateData.memberImage === ""
    ) {
      return true;
    }
  };

  return (
    <>
      <div className="tf-create-item tf-section">
        <div className="ibthemes-container">
          <div className="row">
            {/* Large Image Preview */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
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
                            selectedAvatar === avatar
                              ? "2px solid #3b82f6"
                              : "none",
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
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
                <form action="#" className="form-profile">
                  <div className="form-infor-profile">
                    <div className="info-account">
                      <h4 className="title-create-item">Account info</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Username</h4>
                        <input
                          type="text"
                          placeholder="Your Username"
                          value={updateData.memberNick}
                          onChange={({ target: { value } }) =>
                            setUpdateData({ ...updateData, memberNick: value })
                          }
                          style={{
                            color: isDark ? "#e3e3ed" : "#1f1f2c",
                          }}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Phone</h4>
                        <input
                          type="tel"
                          placeholder="Your Phone"
                          value={updateData.memberPhone}
                          onChange={({ target: { value } }) =>
                            setUpdateData({ ...updateData, memberPhone: value })
                          }
                          style={{
                            color: isDark ? "#e3e3ed" : "#1f1f2c",
                          }}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Address</h4>
                        <input
                          type="text"
                          placeholder="Your Address"
                          value={updateData.memberAddress}
                          onChange={({ target: { value } }) =>
                            setUpdateData({
                              ...updateData,
                              memberAddress: value,
                            })
                          }
                          style={{
                            color: isDark ? "#e3e3ed" : "#1f1f2c",
                          }}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="info-account">
                      <fieldset>
                        {/* TODO: Add a file input for profile image */}
                        <h4 className="title-infor-account">Bio</h4>
                        <textarea
                          tabIndex={4}
                          rows={5}
                          style={{
                            color: isDark ? "#e3e3ed" : "#1f1f2c",
                          }}
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        className="tf-button-submit mg-t-15"
                        type="submit"
                        onClick={updatePropertyHandler}
                        disabled={doDisabledCheck()}
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>

                  {/* Social buttons in a row */}
                  <div
                    className="info-social"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "2rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <fieldset
                      style={{ border: "none", padding: 0, margin: "20px 0" }}
                    >
                      <a
                        className="connect"
                        onClick={() => setActiveSection("followers")}
                      >
                        <i className="fas fa-users" />
                        Followers
                      </a>
                    </fieldset>
                    <fieldset
                      style={{ border: "none", padding: 0, margin: "20px 0" }}
                    >
                      <a
                        className="connect"
                        onClick={() => setActiveSection("followings")}
                      >
                        <i className="fas fa-user-plus" />
                        Followings
                      </a>
                    </fieldset>
                    <fieldset
                      style={{ border: "none", padding: 0, margin: "20px 0" }}
                    >
                      <a
                        className="connect"
                        onClick={() => setActiveSection("favorites")}
                      >
                        <i className="fas fa-heart" />
                        My Favorites
                      </a>
                    </fieldset>
                  </div>

                  {/* Section content */}
                  {activeSection && (
                    <div
                      className="section-content"
                      style={{
                        marginTop: "2.5rem",
                        padding: "1rem",
                        borderRadius: "6px",
                      }}
                    >
                      {activeSection === "followers" && (
                        <div
                          style={{
                            display: "flex",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                          }}
                        >
                          {[1, 2, 3, 4].map((num, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100px",
                              }}
                            >
                              <Image
                                src={`/assets/images/avatar/avt-${num}.webp`}
                                alt={`Follower ${index + 1}`}
                                width={70}
                                height={70}
                                style={{ borderRadius: "50%" }}
                              />
                              <h6
                                style={{
                                  marginTop: "8px",
                                  fontSize: "14px",
                                  textAlign: "center",
                                }}
                              >
                                Follower Name {index + 1}
                              </h6>
                              <fieldset style={{ border: "none", padding: 0 }}>
                                <a className="unfollow">
                                  <i className="fas fa-users" />
                                  UnFollow
                                </a>
                              </fieldset>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeSection === "followings" && (
                        <div
                          style={{
                            display: "flex",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                          }}
                        >
                          {[1, 2, 3, 4].map((num, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100px",
                              }}
                            >
                              <Image
                                src={`/assets/images/avatar/avt-${num}.webp`}
                                alt={`Follower ${index + 1}`}
                                width={70}
                                height={70}
                                style={{ borderRadius: "50%" }}
                              />
                              <h6
                                style={{
                                  marginTop: "8px",
                                  fontSize: "14px",
                                  textAlign: "center",
                                }}
                              >
                                Followings Name {index + 1}
                              </h6>
                              <fieldset style={{ border: "none", padding: 0 }}>
                                <a className="follow">
                                  <i className="fas fa-users" />
                                  Follow
                                </a>
                              </fieldset>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeSection === "favorites" && (
                        <div
                          style={{
                            display: "flex",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                          }}
                        >
                          {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "170px",
                              }}
                            >
                              <Image
                                src={`/assets/images/avatar/avt-${num}.webp`}
                                alt={`Follower ${index + 1}`}
                                width={140}
                                height={140}
                                style={{ borderRadius: "10%" }}
                              />
                              <h6
                                style={{
                                  marginTop: "8px",
                                  fontSize: "14px",
                                  textAlign: "center",
                                }}
                              >
                                Product Name {index + 1}
                              </h6>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
