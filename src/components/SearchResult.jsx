import photo from '../assets/profile.png'
const SearchResult = () => {
  return (
    <ul>
      <li className="flex-row">
        <img src={photo}/>
        <p>Jan Rally</p>
      </li>
    </ul>
  );
}
 
export default SearchResult;