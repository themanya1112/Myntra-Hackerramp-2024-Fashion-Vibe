import React, { useState, useEffect } from 'react';
import  getLinkFromCSV  from './utils'; // Adjust the import path as necessary

const LinkComponent = ({ csvFilePath, imageName, children }) => {
    const [linkValue, setLinkValue] = useState('');

    useEffect(() => {
        const fetchAndSetLinkValue = async () => {
            const link = await getLinkFromCSV(csvFilePath, imageName);
            if (link) {
                setLinkValue(link);
                console.log(link);
            } else {
                console.log(`Error fetching link`);
            }
        };

        fetchAndSetLinkValue();
    }, [csvFilePath, imageName]);

    if (!linkValue) {
        return null;
    }

    console.log(linkValue);

    return (
        <a href={linkValue} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default LinkComponent;
