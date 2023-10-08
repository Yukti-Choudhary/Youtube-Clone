import { useState } from "react";

const useLikeDislike = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLike(!like);
    setDislike(false);
    like ? setLikeCount((prev) => prev - 1) : setLikeCount((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislike(!dislike);
    setLike(false);
    if (likeCount === 0) return;
    !dislike && setLikeCount(likeCount - 1);
  };

  return { like, dislike, likeCount, handleDislike, handleLike };
};

export default useLikeDislike;
