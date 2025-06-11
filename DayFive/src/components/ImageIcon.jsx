import reacting from '../assets/react.svg';
import '../index.css'
const ImageIcon = () => {
  return (
    <div>
        <img className='img_1' src={reacting} alt="icon" />
    </div>
  )
}
export default ImageIcon;

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
export function Listing(){
  return(
    <ul style={{
      backgroundColor:'black',
      color:'white'
    }}>
      <li>Thiyagu</li>
      <li>Adthiya</li>
      <li>Tamil</li>
    </ul>
  );
}

