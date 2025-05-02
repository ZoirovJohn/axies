"use client";
import { useState, ChangeEvent } from "react";
import UploadProfile from "../element/UploadProfile";
import Image from "next/image";

export default function EditProfile(): JSX.Element {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [getSelectCover, setSelectCover] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<
    "followers" | "followings" | "favorites" | null
  >(null);

  // multi image upload
  const multiConverHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (
      files?.length <= 2 &&
      Number(files?.length) + Number(selectedFiles?.length) <= 2
    ) {
      setSelectedFiles([...selectedFiles, ...files.slice(0, 2)]);
      const urls = files.map((file) => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...urls]);
    }
  };

  return (
    <>
      <div className="tf-create-item tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <UploadProfile />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
              <div className="form-upload-profile">
                <form action="#" className="form-profile">
                  <div className="form-infor-profile">
                    <div className="info-account">
                      <h4 className="title-create-item">Account info</h4>
                      <fieldset>
                        <h4 className="title-infor-account">Display name</h4>
                        <input
                          type="text"
                          placeholder="Trista Francis"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Phone</h4>
                        <input
                          type="tel"
                          placeholder="+82 10 0101 1010"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <h4 className="title-infor-account">Email</h4>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="info-account">
                      <fieldset>
                        <h4 className="title-infor-account">Bio</h4>
                        <textarea
                          tabIndex={4}
                          rows={5}
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        className="tf-button-submit mg-t-15"
                        type="submit"
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
                    <fieldset style={{ border: "none", padding: 0 }}>
                      <a
                        className="connect"
                        onClick={() => setActiveSection("followers")}
                      >
                        <i className="fas fa-users" />
                        Followers
                      </a>
                    </fieldset>
                    <fieldset style={{ border: "none", padding: 0 }}>
                      <a
                        className="connect"
                        onClick={() => setActiveSection("followings")}
                      >
                        <i className="fas fa-user-plus" />
                        Followings
                      </a>
                    </fieldset>
                    <fieldset style={{ border: "none", padding: 0 }}>
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
                        // backgroundColor: "#fafafa",
                        borderRadius: "6px",
                        border: "1px solid #e0e0e0",
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
                                width: "180px",
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
