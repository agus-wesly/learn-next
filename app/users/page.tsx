import Table from "../../components/Table";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const getAllUser = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));

  let allUser: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    allUser.push({ id: doc.id, ...doc.data() });
  });

  return allUser;
};

const page = async () => {
  const allUser = await getAllUser();

  return (
    <div className="flex flex-col mt-5">
      <h1 className="text-3xl font-bold text-black/90 dark:text-white mb-5 text-center">
        All Users List
      </h1>

      <Table users={allUser} />
    </div>
  );
};

export default page;
