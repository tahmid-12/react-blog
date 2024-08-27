const http = require('http');
const url = require('url');
const data = require('./blogsData.json');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow only this origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url.startsWith('/data') && req.method === 'GET') {
        const queryObject = url.parse(req.url, true).query;

        const currentPage = parseInt(queryObject.page) || 1;
        const pageSize = parseInt(queryObject.limit) || 10;
        const selectedCategory = queryObject.category || null;

        let filteredData = data;

        // Filter by category if selected
        if (selectedCategory) {
            filteredData = filteredData.filter(blog => blog.category === selectedCategory);
        }

        // Paginate data
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(paginatedData));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
