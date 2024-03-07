import React from 'react';
import ProfileBar from './ProfileBar'; // Assuming ProfileBar is imported
import ChatBot from './ChatbotDirect'; // Assuming ChatBot is imported
import PopularBooks from './PopularNow';

const Dashboard = ({ userName,setAuth }) => {
  return (
    <div className="dashboard mt-3">
      {/* ProfileBar component within the Dashboard component */}
      <ProfileBar userName={userName} setAuth={setAuth}/>
      <div className="mt-8"> {/* Add margin top for spacing */}
        <ChatBot/>
      </div>
      <div className="mt-10"><PopularBooks/></div>
      
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
