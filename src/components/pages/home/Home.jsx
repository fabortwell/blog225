
import Hero from "../../hero/Hero"
import Posts from "../../posts/Posts"
import TopBar from "../../topbar/TopBar"


import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    <TopBar />
        <Hero/>
       <div className="home">
       <Posts/>
       <Sidebar />
       </div>
    </>
  )
}
