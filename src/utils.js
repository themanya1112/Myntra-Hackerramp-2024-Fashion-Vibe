import Papa from 'papaparse';

const fetchCSVData = async (csvFilePath) => {
    try {
        const response = await fetch(csvFilePath);
        const text = await response.text();
        const parsedData = Papa.parse(text, { header: false }).data;
        return parsedData;
    } catch (error) {
        console.error(`Error fetching CSV from ${csvFilePath}:`, error);
        return [];
    }
};

const getLinkFromCSV = async (csvFilePath, imageName) => {
    const csvData = await fetchCSVData(csvFilePath);
    const imageNumber = parseInt(imageName.split('.')[0], 10);
    const linkIndex = imageNumber ;

    if (linkIndex < csvData.length) {
        return csvData[linkIndex][1];
    }
    return null;
};

export default getLinkFromCSV;
