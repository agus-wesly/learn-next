interface IProps {
  userId: string;
  title: string;
}

const PostCard = ({ userId, title }: IProps) => {
  return (
    <div>
      <div className="flex flex-col max-w-[290px] border-2 bg-white rounded-md p-5 pt-3">
        <h1 className="text-xl font-bold mb-3">{title}</h1>
        <p>Posted By User {userId}</p>
      </div>
    </div>
  );
};

export default PostCard;
