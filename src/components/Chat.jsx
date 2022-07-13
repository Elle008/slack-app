import SearchResult from "./SearchResult";
const Chat = () => {
  return (
    <div>
      <div>
        Chat
        <span class="material-symbols-outlined">close</span>
      </div>
      <input type="search" placeholder='Search name'/>
      <SearchResult/>
    </div>
  );
}
 
export default Chat;