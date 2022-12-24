"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import allInputs from "../../utils/inputField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AllInp } from "../../typings";

const page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [downURL, setDownURL] = useState("");
  const [allInputField, setAllInputField] = useState<AllInp>({
    name: null,
    age: null,
    email: null,
    pass: null,
  });

  useEffect(() => {
    const upFile = async () => {
      const fileName = new Date().getDate().toString() + file!.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setDownURL(downloadURL);
        }
      );
    };

    if (file) {
      upFile();
    }
  }, [file]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAllInputField((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Register
    const userCred = await createUserWithEmailAndPassword(
      auth,
      allInputField.email!,
      allInputField.pass!
    );

    const { uid } = userCred.user;

    //Add to document
    await setDoc(doc(db, "users", uid), {
      ...allInputField,
      profile: downURL,
    });

    //set All state to default value
    setAllInputField({
      name: null,
      age: null,
      email: null,
      pass: null,
    });
    setDownURL("");
    setFile(null);
    window.alert("Upload Success !");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[80vw] mx-auto gap-2"
      >
        {allInputs.map((inp, i) => (
          <div key={i} className="flex flex-col gap-2">
            <label htmlFor={inp} className="capitalize">
              {inp}
            </label>
            <input
              type={inp === "pass" ? "password" : "text"}
              name={inp}
              id={inp}
              className="border-[1px] border-gray-800 rounded-lg p-3"
              onChange={handleChangeInput}
            />
          </div>
        ))}

        <label
          htmlFor="upFile"
          className={`${downURL && "pointer-events-none"} mt-5`}
        >
          <div className="w-full aspect-square bg-gray-900 border-2  rounded-[24px] border-dashed border-gray-500 grid place-items-center cursor-pointer overflow-hidden">
            <div
              className={`text-slate-600 font-bold text-lg ${
                downURL ? "hidden" : "block"
              } text-center flex-1`}
            >
              Upload Your File Here
              <input
                type="file"
                name="upFile"
                id="upFile"
                className="w-0 h-0 appearance-none"
                onChange={(e) => {
                  e.target.files && setFile(e.target.files[0]);
                }}
              />
            </div>
            <div className={`${downURL ? "block" : "hidden"} w-full h-full`}>
              <img
                src={downURL}
                alt="uploadFile"
                className="w-full object-cover rounded-[24px] h-full"
              />
            </div>
          </div>
        </label>

        <button
          type="submit"
          className="mt-5 rounded-lg bg-purple-700 font-bold text-white p-3 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:text-white/80"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default page;
