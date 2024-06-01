import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const EditProfile = () => {
  const userData = useLoaderData();
  const formRef = useRef(null);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userInfo4PATCH = {
      name,
      age,
      mobileNumber,
      email: userData?.email,
    };

    fetch(`http://localhost:5000/users/${userData?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo4PATCH),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount === 1) {
          toast("🦄 Profile Editing Successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          formRef.current.reset();
        }
      });
  };
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-7 text-center">Edit Profile </h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 md:w-1/2 mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={userData?.name}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={userData?.email}
            disabled
            name="email"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Age</label>
          <input type="text" name="age" className="py-2 px-1 bg-slate-50 " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-1 bg-slate-950 text-white "
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
