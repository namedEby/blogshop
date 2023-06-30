import React, { useState } from "react";

interface Comment {
  author: string;
  text: string;
  replies?: Comment[];
  avatar: string;
  timestamp: string;
}

const CommentCard: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      author: "User1",
      text: "This is the first comment.",
      replies: [
        {
            author: "User1",
            text: "This is the first comment.",
            replies: [],
            avatar: "https://example.com/avatar1.png",
            timestamp: "2023-06-30 12:34 PM",
          },
           {
      author: "User1",
      text: "This is the first comment.",
      replies: [],
      avatar: "https://example.com/avatar1.png",
      timestamp: "2023-06-30 12:34 PM",
    },
      ],
      avatar: "https://example.com/avatar1.png",
      timestamp: "2023-06-30 12:34 PM",
    },
    {
      author: "User4",
      text: "This is the second comment.",
      replies: [],
      avatar: "https://example.com/avatar2.png",
      timestamp: "2023-06-30 1:45 PM",
    },
  ]);

  const [newComment, setNewComment] = useState<Comment>({
    author: "",
    text: "",
    avatar: "",
    timestamp: "",
  });
  const [showReplyFields, setShowReplyFields] = useState<boolean[]>([]);
  const [showReplies, setShowReplies] = useState<boolean[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComments((prevComments) => [...prevComments, newComment]);
    setNewComment({ author: "", text: "", avatar: "", timestamp: "" });
  };

  const handleReplySubmit = (commentIndex: number, reply: Comment) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[commentIndex].replies = [
        ...(updatedComments[commentIndex].replies || []),
        reply,
      ];
      return updatedComments;
    });
  };

  const handleToggleReplyField = (commentIndex: number) => {
    setShowReplyFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[commentIndex] = !updatedFields[commentIndex];
      return updatedFields;
    });
  };

  const handleToggleReplies = (commentIndex: number) => {
    setShowReplies((prevReplies) => {
      const updatedReplies = [...prevReplies];
      updatedReplies[commentIndex] = !updatedReplies[commentIndex];
      return updatedReplies;
    });
  };

 

  const getRandomColor = () => {
    const colors = [
      "#E59484 ",
      "#F4EF87 ",
      "#C1F487 ",
      "#87F4ED ",
      "#87A8F4 ",
      "#D387F4 ",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const generateRandomAvatarStyle = () => {
    const randomColor = getRandomColor();
    return {
      backgroundColor: randomColor,
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      marginRight: "10px",
      marginBottom:"10px"
    };
  };

  return (
    <div className="card bg-primary p-10 w-full rounded" style={{ borderRadius: "20px" }}>
      <div className="comments">
      <h3 className="text-secondary mb-10 ">Comments</h3>

        <h3 className="text-secondary">Comments</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Write your comment here"
            name="text"
            value={newComment.text}
            onChange={handleInputChange}
            required
            className="mb-2 bg-transparent border border-secondary h-40 min-h-16 focus:outline-none text-secondary rounded p-2 w-full"
          />
          <div>
            <button
              type="submit"
              className="bg-transparent  border w-40 text-white px-4 py-2 rounded-full"
            >
              Post Comment
            </button>
          </div>
        </form>
        <hr className="my-4" />
        <ul className="w-full space-y-6">
          {comments.map((comment, commentIndex) => (
            <li key={commentIndex} className="space-y-4">
              <div className="comment">
                <div className="comment-header flex items-center">
                  <div
                    style={generateRandomAvatarStyle()}
                    className="rounded-full w-20 h-20 mr-2 flex items-center justify-center"
                  >{comment.author[0]}</div>
                  <span className="comment-author text-secondary">{comment.author}</span>
                  <span className="comment-timestamp text-secondary ml-2">
                    {comment.timestamp}
                  </span>
                </div>
                <span className="comment-text text-secondary font-thin">{comment.text}</span>
              </div>
              <div className="comment-actions flex gap-10">
                <div className="reply-button">
                  <button
                    className="text-secondary font-thin hover:bg-transparent"
                    onClick={() => handleToggleReplyField(commentIndex)}
                  >
                    Reply
                  </button>
                </div>
                <div className="reply-count">
                  <button
                    className="text-secondary font-thin"
                    onClick={() => handleToggleReplies(commentIndex)}
                  >
                    {comment.replies && comment.replies.length > 0
                      ? `${comment.replies.length} ${
                          comment.replies.length === 1 ? "Reply" : "Replies"
                        }`
                      : "No Replies"}
                  </button>
                </div>
              </div>
              {showReplyFields[commentIndex] && (
                <div className="reply-form">
                  <textarea
                    placeholder="Write your reply here"
                    name="text"
                    value={newComment.text}
                    onChange={handleInputChange}
                    required
                    className="mb-2  bg-transparent border border-secondary rounded p-2 w-full focus:outline-none text-secondary"
                  />
                  <button
                    className="bg-transparent border w-40 text-white px-4 py-2 rounded-full"
                    onClick={() =>
                      handleReplySubmit(commentIndex, {
                        author: "User",
                        text: newComment.text,
                        avatar: "https://example.com/avatar3.png",
                        timestamp: "2023-06-30 2:15 PM",
                      })
                    }
                  >
                    Submit Reply
                  </button>
                </div>
              )}
              {showReplies[commentIndex] && comment.replies && (
                <ul className="reply-comments space-y-6 ml-20">
                  {comment.replies.map((reply, replyIndex) => (
                    <li key={replyIndex}>
                      <div className="comment">
                        <div className="comment-header flex items-center">
                          <div
                            style={generateRandomAvatarStyle()}
                            className="rounded-full w-8 h-8 mr-2"
                          ></div>
                          <span className="comment-author text-secondary">{reply.author}</span>
                          <span className="comment-timestamp text-secondary ml-2">
                            {reply.timestamp}
                          </span>
                        </div>
                        <span className="comment-text text-secondary font-thin">{reply.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentCard;
