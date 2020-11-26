import { useEffect, useState } from "react";
import ChatView from "./components/ChatView";
import SidePanel from "./components/SidePanel";
import { Wrapper } from "./components/StyledComponents";
import { DataContext } from "./components/Context";

function App() {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [gender, setGender] = useState(null);
  const [darkmode, setDarkmode] = useState(false);

  // function array_move(arr, user_index, newIndex) {
  //   arr.splice(newIndex, 0, arr.splice(user_index, 1)[0]);
  //   return arr;
  // }
  const onClick = (id, gender) => {
    setId(id);
    setGender(gender);
    // const contactSelected = data.findIndex((contact) => contact.id === id);
  };
//n
  useEffect(() => {
    if (!id) {
      fetch("http://localhost:3001/getfirstinfo")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setData(data);
          }
        });
    }
  }, []);
  const handleTheme = () => {
    setDarkmode(!darkmode);
  };
  return (
    <DataContext.Provider value={{ data,darkmode }}>
      <Wrapper>
        <SidePanel onClick={onClick} />
        <ChatView id={id} gender={gender} onClick={handleTheme} />
      </Wrapper>
    </DataContext.Provider>
  );
}

export default App;
