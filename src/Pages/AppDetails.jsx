import React from 'react';
import { useParams } from 'react-router';
import useAppData from '../Hooks/useAppData';

const AppDetails = () => {
    const {id} = useParams()
    const { appData,loading } = useAppData();
    const filteredApp = appData.find(app => app.id === Number(id))
    console.log(filteredApp)
    if (loading) {
        return <p>Loading...⏳</p>
    }
    else{
          return (
        <div>
            hello app details: {appData.length}
        </div>
    );
    }
  
};

export default AppDetails;