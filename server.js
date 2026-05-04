const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static('.'));

const config = {
    accessKey: 'AKPA8OLXSB1777571103',
    secretKey: 'FTSlzovfQSbjReP+t+MIEcGe69XNxjOba5g/EYSg',
    associateTag: 'dahinwal90-21',
    endpoint: 'webservices.amazon.in'
};

function generateSignature(params, timestamp) {
    const sortedParams = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
    const stringToSign = `GET\n${config.endpoint}\n/onca/xml\n${sortedParams}`;
    return crypto.createHmac('sha256', config.secretKey).update(stringToSign).digest('base64');
}

function searchAmazon(keyword, page = 1) {
    const params = {
        'Service': 'AWSECommerceService',
        'Operation': 'ItemSearch',
        'AWSAccessKeyId': config.accessKey,
        'AssociateTag': config.associateTag,
        'SearchIndex': 'All',
        'Keywords': keyword,
        'ResponseGroup': 'Medium,Offers',
        'ItemPage': page,
        'Timestamp': new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')
    };

    const sortedParams = Object.keys(params).sort().map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    const signature = generateSignature(params, params.Timestamp);
    const url = `https://${config.endpoint}/onca/xml?${sortedParams}&Signature=${encodeURIComponent(signature)}`;

    return axios.get(url).then(res => res.data).catch(err => {
        console.error('API Error:', err.message, err.response?.data);
        return null;
    });
}

function parseProducts(xml) {
    const products = [];
    const itemRegex = /<Item>([\s\S]*?)<\/Item>/g;
    let match;
    
    while ((match = itemRegex.exec(xml)) !== null) {
        const item = match[1];
        const getValue = (tag) => {
            const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
            const m = item.match(regex);
            return m ? m[1].trim() : '';
        };
        
        const title = getValue('Title');
        const asin = getValue('ASIN');
        const price = getValue('FormattedPrice') || getValue('ListPrice');
        const image = getValue('MediumImage') || getValue('SmallImage');
        const detailUrl = getValue('DetailPageURL');
        
        if (title && asin) {
            const imgMatch = image ? image.match(/<URL>([\s\S]*?)<\/URL>/) : null;
            products.push({
                name: title.substring(0, 100),
                asin: asin,
                price: price || 'Check on Amazon',
                image: imgMatch ? imgMatch[1] : '',
                url: detailUrl.replace('tag=dahinwal90-21', `tag=${config.associateTag}`)
            });
        }
    }
    return products;
}

app.get('/api/search', async (req, res) => {
    const { q } = req.query;
    if (!q) return res.json({ error: 'No search query' });
    
    try {
        const xml = await searchAmazon(q);
        if (!xml) return res.json({ error: 'API failed' });
        
        const products = parseProducts(xml);
        res.json({ products });
    } catch (e) {
        res.json({ error: e.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));