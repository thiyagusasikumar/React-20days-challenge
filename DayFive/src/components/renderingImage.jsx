import { ImageTaker } from "./ImageTaker";

export const renderingImage = () => {
  return (
    <div>renderingImage</div>
  )
}
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={ImageTaker(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      </div>
  );
}