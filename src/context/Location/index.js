import React, { useEffect, useState, useContext, createContext } from 'react';
import { getLocation, addLocation, deleteLocation } from '../../api/location';

export const LocationContext = createContext(null);
export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {

    const [locationData, setLocation] = useState([]);

    useEffect(() => {
        getLocationData()
    }, []);

    // Get Location
    const getLocationData = async () => {
        try {
            const res = await getLocation();
            if (res && res.data) {
                setLocation(res.data.checkins)
            }
        } catch (err) {
            console.log("err", err)
        }

    }
    // Add Location
    const addLocationData = async (payload) => {
        try {
            const res = await addLocation(payload)
            if (res) {
                getLocationData()
            }
        } catch (err) {
            console.log('error', err)
        }
    }


    // Delete Location
    const handleDeleteLocation = async (id) => {
        try {
            const response = await deleteLocation(id)
            if (response.data) {
                const remainingLocations = locationData.filter((item) => item.id !== id)
                setLocation(remainingLocations)
            }

        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <LocationContext.Provider
            value={{
                handleDeleteLocation,
                addLocationData,
                locationData: locationData
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}