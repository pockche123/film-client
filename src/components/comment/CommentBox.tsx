export const CommentBox = ({
  reply,
  setReply,
  setLogin
}: {
  reply: string
  setReply: React.Dispatch<React.SetStateAction<string>>
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className='comment-reply'>
      <textarea
        className='form-control'
        id='discussion-comment'
        placeholder='What are your thoughts?'
        value={reply}
        onChange={e => setReply(e.target.value)}
        rows={4}
        cols={30}
      />
      <div className='comment-reply-buttons'>
        {/* <FontAwesomeIcon icon={faBold} id="bold-icon" onClick={handleBold} /> */}

        <b id='comment-reply-enter'>Reply</b>

        <b
          id='comment-reply-cancel'
          onClick={() => {
            setLogin(false)
          }}
        >
          Cancel
        </b>
      </div>
    </div>
  )
}
