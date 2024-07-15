import React, { useState, useEffect } from 'react';

const fetchLinkValue = async (linkFilePath) => {
    try {
        const response = await fetch(linkFilePath);
        const text = await response.text();
        const firstLine = text.split('\n')[0].trim(); 
        return firstLine;
    } catch (error) {
        console.error(`Error fetching link from ${linkFilePath}:`, error);
        return null; 
    }
};

const LinkComponent = ({ linkFilePath }) => {
    const [linkValue, setLinkValue] = useState('');

    useEffect(() => {
        const fetchAndSetLinkValue = async () => {
            const link = await fetchLinkValue(linkFilePath);
            if (link) {
                setLinkValue(link);
                console.log(link);
            }
            else{
                console.log(`Error fetching link`);
            }
        };

        fetchAndSetLinkValue();
    }, [linkFilePath, setLinkValue]);

    // return linkValue;
};

export default LinkComponent;
