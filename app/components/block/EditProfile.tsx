"use client";
import { useState, ChangeEvent } from "react";
import UploadProfile from "../element/UploadProfile";
import Image from "next/image";

export default function EditProfile(): JSX.Element {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [getSelectCover, setSelectCover] = useState<number | null>(null);

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
                      <fieldset>
                        <h4 className="title-infor-account">Bio</h4>
                        <textarea
                          tabIndex={4}
                          rows={5}
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="info-social">
                      <h4 className="title-create-item">Additional infos</h4>
                      <fieldset>
                        <a className="connect">
                          <i className="fas fa-users" />
                          Followers
                        </a>
                      </fieldset>
                      <fieldset>
                        <a className="connect">
                          <i className="fas fa-user-plus" />
                          Followings
                        </a>
                      </fieldset>
                      <fieldset>
                        <a className="connect">
                          <i className="fas fa-heart" />
                          My Favorites
                        </a>
                      </fieldset>
                    </div>
                  </div>
                  <button className="tf-button-submit mg-t-15" type="submit">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
