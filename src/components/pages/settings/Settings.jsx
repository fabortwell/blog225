import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle">Delete Account</span>

      </div>
    </div>
    <Sidebar />
    </div>
  )
}


