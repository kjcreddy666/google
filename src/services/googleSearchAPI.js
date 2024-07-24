const searchResult = async (key, cx, q) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${q}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        if (data && data.items) {
            return data.items.map(item => {
                const { title, link, snippet } = item;
                return { title, link, snippet };
            });
        } else {
            return [];
        }

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
};

export default searchResult;
