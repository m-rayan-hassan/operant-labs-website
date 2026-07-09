const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app/services');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Replace font-bold in headings
            content = content.replace(/<h([1-6])(.*?)font-bold(.*?)>/g, '<h$1$2italic font-normal$3>');
            
            // Replace <button> with <Link> for btn-solid
            content = content.replace(/<button([^>]*className="[^"]*btn-solid[^"]*"[^>]*)>(.*?)<\/button>/gs, '<Link href="/contact"$1>$2</Link>');
            
            // Fix inline-block for btn-solid in Link (since Link is a tag, btn-solid needs to be inline-block or block sometimes, but btn-solid has padding so inline-flex or inline-block is better)
            // But let's just add inline-block if it's not there
            content = content.replace(/className="btn-solid/g, 'className="btn-solid inline-block');

            // Wait, we need to make sure we don't duplicate inline-block
            content = content.replace(/inline-block inline-block/g, 'inline-block');

            if (content !== originalContent) {
                // Ensure Link is imported if we are adding Links
                if (!content.includes('import Link from')) {
                    content = content.replace(/import { motion } from "framer-motion";/, 'import Link from "next/link";\nimport { motion } from "framer-motion";');
                }
                
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(servicesDir);
