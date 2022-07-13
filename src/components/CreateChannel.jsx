const CreateChannel = () => {
  return (
    <div className="modal">
      <form action="">
        <h2>Create Channel</h2>
        <label htmlFor="channelName">Channel Name</label>
        <input id="channelName" />
        <label htmlFor="description">
          Description
          <span>(Optional)</span>
        </label>
        <input className="text-area" />
        <button>Create Channel</button>
      </form>
    </div>
  );
}
 
export default CreateChannel;