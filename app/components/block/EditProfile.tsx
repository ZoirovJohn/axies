// "use client";
// import { useState, ChangeEvent, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { MemberUpdate } from "@/libs/dto/member/member.update";
// import { useMutation, useReactiveVar } from "@apollo/client";
// import { UPDATE_MEMBER } from "@/apollo/user/mutation";
// import { userVar } from "@/apollo/store";
// import { Messages, REACT_APP_API_URL } from "@/app/config";
// import { getJwtToken, updateStorage, updateUserInfo } from "@/app/(auth)";
// import { sweetErrorHandling, sweetMixinSuccessAlert } from "@/app/sweetAlert";
// import useDarkModeCheck from "@/hooks/useDarkModeCheck";
// import axios from "axios";

// export default function EditProfile({
//   initialValues = {
//     _id: "",
//     memberImage: "",
//     memberNick: "",
//     memberPhone: "",
//     memberAddress: "",
//   },
// }: any): JSX.Element {
//   const [activeSection, setActiveSection] = useState<
//     "followers" | "followings" | "favorites" | null
//   >(null);
//   const [updateData, setUpdateData] = useState<MemberUpdate>(initialValues);
//   const user = useReactiveVar(userVar);
//   const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
//   const imagePath: string = user?.memberImage
//     ? `${REACT_APP_API_URL}/${user?.memberImage}`
//     : "/assets/images/avatar/avt-28.jpg";
//   const isDark = useDarkModeCheck();
//   const token = getJwtToken();

//   const avatars = Array.from(
//     { length: 30 },
//     (_, i) => `/assets/images/avatar/avt-${i + 1}.webp`
//   );

//   const updateProfileImage = () => {
//     if (selectedAvatar) {
//       console.log("updateProfileImage:", selectedAvatar);
//       console.log("imagePath:", imagePath);
//     }
//   };

//   /** APOLLO REQUESTS **/
//   const [updateMember] = useMutation(UPDATE_MEMBER);

//   /** LIFECYCLES **/
//   useEffect(() => {
//     setUpdateData({
//       ...updateData,
//       memberNick: user.memberNick,
//       memberPhone: user.memberPhone,
//       memberAddress: user.memberAddress,
//       memberImage: user.memberImage,
//     });
//     console.log("User data updated:", updateData);
//   }, [user]);

//   /** HANDLERS **/
//   // const uploadImage = async (e: any) => {
//   //   try {
//   //     const image = selectedAvatar || imagePath;
//   //     console.log("+image:", image);

//   //     const formData = new FormData();
//   //     formData.append(
//   //       "operations",
//   //       JSON.stringify({
//   //         query: `mutation ImageUploader($file: Upload!, $target: String!) {
// 	// 					imageUploader(file: $file, target: $target)
//   //           }`,
//   //           variables: {
//   //           file: null,
//   //           target: "member",
//   //         },
//   //       })
//   //     );
//   //     formData.append(
//   //       "map",
//   //       JSON.stringify({
//   //         "0": ["variables.file"],
//   //       })
//   //     );
//   //     formData.append("0", image);

//   //     const response = await axios.post(
//   //       `${process.env.REACT_APP_API_GRAPHQL_URL}`,
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //           "apollo-require-preflight": true,
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );

//   //     console.log("+e:", response);
//   //     const responseImage = response.data.data.imageUploader;
//   //     console.log("+responseImage: ", responseImage);
//   //     updateData.memberImage = responseImage;
//   //     setUpdateData({ ...updateData });

//   //     return `${REACT_APP_API_URL}/${responseImage}`;
//   //   } catch (err) {
//   //     console.log("Error, uploadImage:", err);
//   //   }
//   // };

//    const uploadImage = async (e: any) => {
//     try {
//       const image = selectedAvatar || imagePath;
//       console.log("+image:", image);

//       const formData = new FormData();
//       formData.append(
//         "operations",
//         JSON.stringify({
//           query: `mutation ImageUploader($file: Upload!, $target: String!) {
// 						imageUploader(file: $file, target: $target)
//             }`,
//             variables: {
//             file: null,
//             target: "member",
//           },
//         })
//       );
//       formData.append(
//         "map",
//         JSON.stringify({
//           "0": ["variables.file"],
//         })
//       );
//       formData.append("0", image);

//       const response = await axios.post(
//         `${process.env.REACT_APP_API_GRAPHQL_URL}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "apollo-require-preflight": true,
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("+e:", response);
//       const responseImage = response.data.data.imageUploader;
//       console.log("+responseImage: ", responseImage);
//       updateData.memberImage = responseImage;
//       setUpdateData({ ...updateData });

//       return `${REACT_APP_API_URL}/${responseImage}`;
//     } catch (err) {
//       console.log("Error, uploadImage:", err);
//     }
//   };

//   const updatePropertyHandler = useCallback(async () => {
//     try {
//       if (!user._id) throw new Error(Messages.error2);
//       updateData._id = user._id;
//       console.log("updatePropertyHandler updateData:", updateData);

//       const result = await updateMember({
//         variables: {
//           input: updateData,
//         },
//       });
//       //@ts-ignore
//       const jwtToken = result.data.updateMember?.accessToken;
//       await updateStorage({ jwtToken });
//       updateUserInfo(result.data.updateMember?.accessToken);
//       await sweetMixinSuccessAlert("Information updated successfuly");
//     } catch (err: any) {
//       sweetErrorHandling(err).then();
//     }
//   }, [updateData]);

//   const doDisabledCheck = () => {
//     if (
//       updateData.memberNick === "" ||
//       updateData.memberPhone === "" ||
//       updateData.memberAddress === "" ||
//       updateData.memberImage === ""
//     ) {
//       return true;
//     }
//   };

//   return (
//     <>
//       <div className="tf-create-item tf-section">
//         <div className="ibthemes-container">
//           <div className="row">
//             {/* Large Image Preview */}
//             <div className="col-xl-3 col-lg-4 col-md-6 col-12">
//               <div className="text-center">
//                 <div
//                   style={{
//                     width: "300px",
//                     margin: "20px auto",
//                     border: "2px solid #e5e7eb",
//                     borderRadius: "8px",
//                     padding: "12px",
//                     backgroundColor: "#f9fafb",
//                     boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "100%",
//                       aspectRatio: "1/1",
//                       marginBottom: "16px",
//                       borderRadius: "8px",
//                       overflow: "hidden",
//                       position: "relative",
//                       border: "2px solid #d1d5db",
//                     }}
//                   >
//                     <Image
//                       src={selectedAvatar || imagePath}
//                       alt="Selected Avatar"
//                       layout="fill"
//                       objectFit="cover"
//                       sizes="300px"
//                     />
//                   </div>

//                   {/* Avatar Grid */}
//                   <div
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns: "repeat(5, 1fr)",
//                       gap: "8px",
//                       marginBottom: "16px",
//                     }}
//                   >
//                     {avatars.map((avatar, idx) => (
//                       <div
//                         key={idx}
//                         onClick={() => setSelectedAvatar(avatar)}
//                         style={{
//                           cursor: "pointer",
//                           borderRadius: "4px",
//                           overflow: "hidden",
//                           border:
//                             selectedAvatar === avatar
//                               ? "2px solid #3b82f6"
//                               : "none",
//                           transition: "transform 0.2s",
//                           aspectRatio: "1/1",
//                           width: "100%",
//                           height: "0",
//                           paddingBottom: "100%",
//                           position: "relative",
//                         }}
//                         onMouseOver={(e) => {
//                           e.currentTarget.style.transform = "scale(1.05)";
//                         }}
//                         onMouseOut={(e) => {
//                           e.currentTarget.style.transform = "scale(1)";
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "0",
//                             left: "0",
//                             width: "100%",
//                             height: "100%",
//                           }}
//                         >
//                           <Image
//                             src={avatar}
//                             alt={`Avatar ${idx + 1}`}
//                             layout="fill"
//                             objectFit="cover"
//                             sizes="50px"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Button */}
//                   <button
//                     onClick={uploadImage}
//                     style={{
//                       width: "100%",
//                       padding: "8px 16px",
//                       backgroundColor: "#3b82f6",
//                       color: "white",
//                       borderRadius: "6px",
//                       fontWeight: "500",
//                       cursor: "pointer",
//                       border: "none",
//                       transition: "background-color 0.2s",
//                     }}
//                     onMouseOver={(e) => {
//                       e.currentTarget.style.backgroundColor = "#2563eb";
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.style.backgroundColor = "#3b82f6";
//                     }}
//                   >
//                     Update Profile Logo
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-9 col-lg-8 col-md-12 col-12">
//               <div className="form-upload-profile">
//                 <form action="#" className="form-profile">
//                   <div className="form-infor-profile">
//                     <div className="info-account">
//                       <h4 className="title-create-item">Account info</h4>
//                       <fieldset>
//                         <h4 className="title-infor-account">Username</h4>
//                         <input
//                           type="text"
//                           placeholder="Your Username"
//                           value={updateData.memberNick}
//                           onChange={({ target: { value } }) =>
//                             setUpdateData({ ...updateData, memberNick: value })
//                           }
//                           style={{
//                             color: isDark ? "#e3e3ed" : "#1f1f2c",
//                           }}
//                           required
//                         />
//                       </fieldset>
//                       <fieldset>
//                         <h4 className="title-infor-account">Phone</h4>
//                         <input
//                           type="tel"
//                           placeholder="Your Phone"
//                           value={updateData.memberPhone}
//                           onChange={({ target: { value } }) =>
//                             setUpdateData({ ...updateData, memberPhone: value })
//                           }
//                           style={{
//                             color: isDark ? "#e3e3ed" : "#1f1f2c",
//                           }}
//                           required
//                         />
//                       </fieldset>
//                       <fieldset>
//                         <h4 className="title-infor-account">Address</h4>
//                         <input
//                           type="text"
//                           placeholder="Your Address"
//                           value={updateData.memberAddress}
//                           onChange={({ target: { value } }) =>
//                             setUpdateData({
//                               ...updateData,
//                               memberAddress: value,
//                             })
//                           }
//                           style={{
//                             color: isDark ? "#e3e3ed" : "#1f1f2c",
//                           }}
//                           required
//                         />
//                       </fieldset>
//                     </div>
//                     <div className="info-account">
//                       <fieldset>
//                         {/* TODO: Add a file input for profile image */}
//                         <h4 className="title-infor-account">Bio</h4>
//                         <textarea
//                           tabIndex={4}
//                           rows={5}
//                           style={{
//                             color: isDark ? "#e3e3ed" : "#1f1f2c",
//                           }}
//                           required
//                           defaultValue={""}
//                         />
//                       </fieldset>
//                       <button
//                         className="tf-button-submit mg-t-15"
//                         type="submit"
//                         onClick={updatePropertyHandler}
//                         disabled={doDisabledCheck()}
//                       >
//                         Update Profile
//                       </button>
//                     </div>
//                   </div>

//                   {/* Social buttons in a row */}
//                   <div
//                     className="info-social"
//                     style={{
//                       display: "flex",
//                       gap: "1rem",
//                       marginTop: "2rem",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     <fieldset
//                       style={{ border: "none", padding: 0, margin: "20px 0" }}
//                     >
//                       <a
//                         className="connect"
//                         onClick={() => setActiveSection("followers")}
//                       >
//                         <i className="fas fa-users" />
//                         Followers
//                       </a>
//                     </fieldset>
//                     <fieldset
//                       style={{ border: "none", padding: 0, margin: "20px 0" }}
//                     >
//                       <a
//                         className="connect"
//                         onClick={() => setActiveSection("followings")}
//                       >
//                         <i className="fas fa-user-plus" />
//                         Followings
//                       </a>
//                     </fieldset>
//                     <fieldset
//                       style={{ border: "none", padding: 0, margin: "20px 0" }}
//                     >
//                       <a
//                         className="connect"
//                         onClick={() => setActiveSection("favorites")}
//                       >
//                         <i className="fas fa-heart" />
//                         My Favorites
//                       </a>
//                     </fieldset>
//                   </div>

//                   {/* Section content */}
//                   {activeSection && (
//                     <div
//                       className="section-content"
//                       style={{
//                         marginTop: "2.5rem",
//                         padding: "1rem",
//                         borderRadius: "6px",
//                       }}
//                     >
//                       {activeSection === "followers" && (
//                         <div
//                           style={{
//                             display: "flex",
//                             gap: "1.5rem",
//                             flexWrap: "wrap",
//                           }}
//                         >
//                           {[1, 2, 3, 4].map((num, index) => (
//                             <div
//                               key={index}
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 width: "100px",
//                               }}
//                             >
//                               <Image
//                                 src={`/assets/images/avatar/avt-${num}.webp`}
//                                 alt={`Follower ${index + 1}`}
//                                 width={70}
//                                 height={70}
//                                 style={{ borderRadius: "50%" }}
//                               />
//                               <h6
//                                 style={{
//                                   marginTop: "8px",
//                                   fontSize: "14px",
//                                   textAlign: "center",
//                                 }}
//                               >
//                                 Follower Name {index + 1}
//                               </h6>
//                               <fieldset style={{ border: "none", padding: 0 }}>
//                                 <a className="unfollow">
//                                   <i className="fas fa-users" />
//                                   UnFollow
//                                 </a>
//                               </fieldset>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {activeSection === "followings" && (
//                         <div
//                           style={{
//                             display: "flex",
//                             gap: "1.5rem",
//                             flexWrap: "wrap",
//                           }}
//                         >
//                           {[1, 2, 3, 4].map((num, index) => (
//                             <div
//                               key={index}
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 width: "100px",
//                               }}
//                             >
//                               <Image
//                                 src={`/assets/images/avatar/avt-${num}.webp`}
//                                 alt={`Follower ${index + 1}`}
//                                 width={70}
//                                 height={70}
//                                 style={{ borderRadius: "50%" }}
//                               />
//                               <h6
//                                 style={{
//                                   marginTop: "8px",
//                                   fontSize: "14px",
//                                   textAlign: "center",
//                                 }}
//                               >
//                                 Followings Name {index + 1}
//                               </h6>
//                               <fieldset style={{ border: "none", padding: 0 }}>
//                                 <a className="follow">
//                                   <i className="fas fa-users" />
//                                   Follow
//                                 </a>
//                               </fieldset>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {activeSection === "favorites" && (
//                         <div
//                           style={{
//                             display: "flex",
//                             gap: "1.5rem",
//                             flexWrap: "wrap",
//                           }}
//                         >
//                           {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, index) => (
//                             <div
//                               key={index}
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 width: "170px",
//                               }}
//                             >
//                               <Image
//                                 src={`/assets/images/avatar/avt-${num}.webp`}
//                                 alt={`Follower ${index + 1}`}
//                                 width={140}
//                                 height={140}
//                                 style={{ borderRadius: "10%" }}
//                               />
//                               <h6
//                                 style={{
//                                   marginTop: "8px",
//                                   fontSize: "14px",
//                                   textAlign: "center",
//                                 }}
//                               >
//                                 Product Name {index + 1}
//                               </h6>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import Image from "next/image";
import { MemberUpdate } from "@/libs/dto/member/member.update";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import {
  LIKE_TARGET_PROPERTY,
  SUBSCRIBE,
  UNSUBSCRIBE,
  UPDATE_MEMBER,
} from "@/apollo/user/mutation";
import { selectedPropertyAuthorVar, userVar } from "@/apollo/store";
import { Messages, REACT_APP_API_URL } from "@/app/config";
import { updateStorage, updateUserInfo } from "@/app/(auth)";
import {
  sweetErrorHandling,
  sweetMixinErrorAlert,
  sweetMixinSuccessAlert,
  sweetTopSmallSuccessAlert,
} from "@/app/sweetAlert";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import {
  GET_FAVORITES,
  GET_MEMBER_FOLLOWERS,
  GET_MEMBER_FOLLOWINGS,
} from "@/apollo/user/query";
import { FollowInquiry } from "@/libs/dto/follow/follow.input";
import { T } from "@/libs/types/common";
import { Follower, Following } from "@/libs/dto/follow/follow";
import { Property } from "@/libs/dto/property/property";
import { Message } from "@/libs/enums/common.enum";
import Link from "next/link";

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
  const [subscribe] = useMutation(SUBSCRIBE);
  const [unsubscribe] = useMutation(UNSUBSCRIBE);
  const imagePath: string = user?.memberImage
    ? `${REACT_APP_API_URL}/${user?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";
  const isDark = useDarkModeCheck();
  const [followingInquiry, setFollowingInquiry] = useState<FollowInquiry>({
    page: 1,
    limit: 5,
    search: {
      followingId: user?._id,
    },
  });
  const [followerInquiry, setFollowerInquiry] = useState<FollowInquiry>({
    page: 1,
    limit: 5,
    search: {
      followerId: user?._id,
    },
  });
  const [searchFavorites, setSearchFavorites] = useState<T>({
    page: 1,
    limit: 6,
  });
  const [memberFollowers, setMemberFollowers] = useState<Follower[]>([]);
  const [memberFollowings, setMemberFollowings] = useState<Following[]>([]);
  const [myFavorites, setMyFavorites] = useState<Property[]>([]);
  const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

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

  const {
    loading: getMemberFollowersLoading,
    data: getMemberFollowersData,
    error: getMemberFollowersError,
    refetch: getMemberFollowersRefetch,
  } = useQuery(GET_MEMBER_FOLLOWERS, {
    fetchPolicy: "network-only",
    variables: { input: followingInquiry },
    skip: !followingInquiry?.search?.followingId,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setMemberFollowers(data?.getMemberFollowers?.list);
    },
  });

  const {
    loading: getMemberFollowingsLoading,
    data: getMemberFollowingsData,
    error: getMemberFollowingsError,
    refetch: getMemberFollowingsRefetch,
  } = useQuery(GET_MEMBER_FOLLOWINGS, {
    fetchPolicy: "network-only",
    variables: { input: followerInquiry },
    skip: !followerInquiry?.search?.followerId,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setMemberFollowings(data?.getMemberFollowings?.list);
    },
  });

  const {
    loading: getFavoritesLoading,
    data: getFavoritesData,
    error: getFavoritesError,
    refetch: getFavoritesRefetch,
  } = useQuery(GET_FAVORITES, {
    fetchPolicy: "network-only",
    variables: { input: searchFavorites },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setMyFavorites(data?.getFavorites?.list);
      console.log("data?.getFavorites?.list:", data?.getFavorites?.list);
    },
  });

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

  const likePropertyHandler = async (user: T, id: string) => {
    try {
      if (!id) return;
      if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);

      await likeTargetProperty({ variables: { input: id } });

      await getFavoritesRefetch({ input: searchFavorites });

      await sweetTopSmallSuccessAlert("success", 800);
    } catch (err: any) {
      console.log("ERROR, likePropertyHandler");
      sweetMixinErrorAlert(err.message).then();
    }
  };

  const subscribeHandler = async (id: string, refetch: any, query: any) => {
    try {
      console.log("id:", id);
      if (!id) throw new Error(Messages.error1);
      if (!user._id) throw new Error(Messages.error2);

      await subscribe({
        variables: {
          input: id,
        },
      });
      setMemberFollowers((prev) =>
        prev.map((follower) =>
          follower.followerData?._id === id
            ? {
                ...follower,
                meFollowed: [
                  {
                    followingId: follower.followingId,
                    followerId: follower.followerId,
                    myFollowing: true,
                  },
                ],
              }
            : follower
        )
      );
      setMemberFollowings((prev) =>
        prev.map((following) =>
          following.followingData?._id === id
            ? {
                ...following,
                meFollowed:
                  following.meFollowed?.map((entry) => ({
                    ...entry,
                    myFollowing: true,
                  })) ?? [],
              }
            : following
        )
      );
      await sweetTopSmallSuccessAlert("Subscribed!", 800);

      // await refetch({ input: query });
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const unsubscribeHandler = async (id: string, refetch: any, query: any) => {
    try {
      if (!id) throw new Error(Messages.error1);
      if (!user._id) throw new Error(Messages.error2);

      await unsubscribe({
        variables: {
          input: id,
        },
      });
      setMemberFollowers((prev) =>
        prev.map((follower) =>
          follower.followerData?._id === id
            ? {
                ...follower,
                meFollowed: [
                  {
                    followingId: follower.followingId,
                    followerId: follower.followerId,
                    myFollowing: false,
                  },
                ],
              }
            : follower
        )
      );
      setMemberFollowings((prev) =>
        prev.map((following) =>
          following.followingData?._id === id
            ? {
                ...following,
                meFollowed:
                  following.meFollowed?.map((entry) => ({
                    ...entry,
                    myFollowing: false,
                  })) ?? [],
              }
            : following
        )
      );

      await sweetTopSmallSuccessAlert("Unsubscribed!", 800);

      // await refetch({ input: query });
    } catch (err: any) {
      sweetErrorHandling(err).then();
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
                          {memberFollowers.length === 0 ? (
                            <h3 style={{ color: "rgb(81, 66, 252)" }}>
                              No member followers
                            </h3>
                          ) : (
                            memberFollowers.map((follower, index) => (
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
                                  src={
                                    follower?.followerData?.memberImage
                                      ? `${REACT_APP_API_URL}/${follower?.followerData?.memberImage}`
                                      : "/assets/images/avatar/avt-28.jpg"
                                  }
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
                                  <Link
                                    href="/authors-2"
                                    onClick={() => {
                                      selectedPropertyAuthorVar(
                                        follower?.followerData?._id
                                      );
                                      localStorage.setItem(
                                        "selectedPropertyAuthor",
                                        follower?.followerData?._id ?? ""
                                      );
                                    }}
                                  >
                                    {follower?.followerData?.memberNick}
                                  </Link>
                                </h6>

                                {user?._id !== follower?.followerId &&
                                  (follower.meFollowed?.[0]?.myFollowing ? (
                                    <fieldset
                                      style={{ border: "none", padding: 0 }}
                                    >
                                      <a
                                        className="unfollow"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          if (follower?.followerData?._id) {
                                            unsubscribeHandler(
                                              follower.followerData._id,
                                              null,
                                              followingInquiry
                                            );
                                          }
                                        }}
                                      >
                                        <i className="fas fa-users" />
                                        UnFollow
                                      </a>
                                    </fieldset>
                                  ) : (
                                    <fieldset
                                      style={{ border: "none", padding: 0 }}
                                    >
                                      <a
                                        className="follow"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          if (follower?.followerData?._id) {
                                            subscribeHandler(
                                              follower.followerData._id,
                                              null,
                                              followingInquiry
                                            );
                                          }
                                        }}
                                      >
                                        <i className="fas fa-users" />
                                        Follow
                                      </a>
                                    </fieldset>
                                  ))}
                              </div>
                            ))
                          )}
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
                          {memberFollowings.length === 0 ? (
                            <h3 style={{ color: "rgb(81, 66, 252)" }}>
                              No member followings
                            </h3>
                          ) : (
                            memberFollowings.map((following, index) => (
                              <div
                                key={index}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  width: "100px",
                                }}
                              >
                                {user?._id === following?.followerId &&
                                  following.meFollowed?.[0]?.myFollowing && (
                                    <>
                                      <Image
                                        src={
                                          following?.followingData?.memberImage
                                            ? `${REACT_APP_API_URL}/${following?.followingData?.memberImage}`
                                            : "/assets/images/avatar/avt-28.jpg"
                                        }
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
                                        <Link
                                          href="/authors-2"
                                          onClick={() => {
                                            selectedPropertyAuthorVar(
                                              following?.followingData?._id
                                            );
                                            localStorage.setItem(
                                              "selectedPropertyAuthor",
                                              following?.followingData?._id ??
                                                ""
                                            );
                                          }}
                                        >
                                          {following?.followingData?.memberNick}
                                        </Link>
                                      </h6>
                                      <fieldset
                                        style={{ border: "none", padding: 0 }}
                                      >
                                        <a
                                          className="unfollow"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            if (following?.followingData?._id) {
                                              unsubscribeHandler(
                                                following.followingData._id,
                                                null,
                                                followingInquiry
                                              );
                                            }
                                          }}
                                        >
                                          <i className="fas fa-users" />
                                          UnFollow
                                        </a>
                                      </fieldset>
                                    </>
                                  )}
                              </div>
                            ))
                          )}
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
                          {myFavorites?.length ? (
                            myFavorites?.map((property: Property) => {
                              return (
                                <div
                                  key={property._id}
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "170px",
                                  }}
                                >
                                  <Image
                                    src={`${REACT_APP_API_URL}/${property?.propertyImages[0]}`}
                                    alt={`Follower ${property._id + 1}`}
                                    width={140}
                                    height={140}
                                    style={{ borderRadius: "10%" }}
                                  />
                                  <button
                                    onClick={() => {
                                      likePropertyHandler(user, property?._id);
                                    }}
                                    style={{
                                      backgroundColor: "unset",
                                      border: "none",
                                    }}
                                    className={`wishlist-button heart ${"active"} `}
                                  ></button>
                                  <h6
                                    style={{
                                      marginTop: "8px",
                                      fontSize: "14px",
                                      textAlign: "center",
                                    }}
                                  >
                                    {property.propertyTitle}
                                  </h6>
                                </div>
                              );
                            })
                          ) : (
                            <div className={"no-data"}>
                              <img src="/img/icons/icoAlert.svg" alt="" />
                              <p>No Favorites found!</p>
                            </div>
                          )}
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
