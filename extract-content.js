const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
let masterMap = {};

fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Unable to scan directory: ' + err);

    files.forEach((file) => {
        if (path.extname(file) === '.html' && file !== 'index.html' && file !== 'wizard.html') {
            const filePath = path.join(directoryPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const slug = file.replace('.html', '');

            // Safe match extractions using your unique text layout boundaries
            const heroHeadlineMatch = content.match(/<h1 style="color: #0a1f44;[^>]*>([\s\S]*?)<\/h1>/);
            const heroBodyMatch = content.match(/<p style="color: #475569; font-size: 1.1rem;[^>]*>([\s\S]*?)<\/p>/);
            
            // Extracts Section B (Main Street Growth) text strings
            const secBHeadlineMatch = content.match(/<h2 style="color: #0a1f44; font-size: 2.5rem;[^>]*>([\s\S]*?)<\/h2>/);
            const secBBodyMatch = content.match(/<p style="color: #475569; font-size: 1rem;[^>]*>([\s\S]*?)<\/p>/);

            masterMap[slug] = {
                heroHeadline: heroHeadlineMatch ? heroHeadlineMatch[1].trim() : "The Hub for Total Compliance.",
                heroBody: heroBodyMatch ? heroBodyMatch[1].trim() : "Automate your corporate structures securely.",
                sectionBHeadline: secBHeadlineMatch ? secBHeadlineMatch[1].trim() : "Neighborhood Focus.",
                sectionBBody: secBBodyMatch ? secBBodyMatch[1].trim() : "Protect your independent venture with specialized management tools."
            };
        }
    });

    // Write the output directly to a JSON data map file
    fs.writeFileSync('extracted-data.json', JSON.stringify(masterMap, null, 2), 'utf8');
    console.log("ðŸŽ‰ Success! Open 'extracted-data.json' to see all your text safely saved.");
});

