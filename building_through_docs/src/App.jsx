import Avatar from "./Ava";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import TodoList from "./Todo";
import { WhoStoDO } from "./Todo";
import DateToday from "./Dated";
import Styling from "./Styling";


export default function App(){
  return (
    <>
    <Profile />
    <TodoList />
    <Avatar />
    <WhoStoDO />
    <DateToday />
    <Styling />
    </>
  )
}