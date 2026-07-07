const fs = require('fs');
const log = fs.readFileSync('/home/rayan/.gemini/antigravity/brain/6f69caa8-be89-46eb-86a4-a4c4aabc4598/.system_generated/logs/overview.txt', 'utf8');
const lines = log.split('\n');

let insightsCode = null;
let finalCtaCode = null;

for (const line of lines) {
  if (!line) continue;
  try {
    const splitIdx = line.indexOf('-');
    const jsonStr = splitIdx > 0 && splitIdx < 5 ? line.slice(splitIdx + 1) : line.includes('{') ? line.substring(line.indexOf('{')) : null;
    if (!jsonStr) continue;
    const parsed = JSON.parse(jsonStr);
    if (parsed.tool_calls) {
      for (const call of parsed.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile) {
          const target = call.args.TargetFile;
          if (target.includes('Insights.tsx') && !insightsCode) {
            insightsCode = call.args.CodeContent;
          }
          if (target.includes('FinalCta.tsx') && !finalCtaCode) {
            finalCtaCode = call.args.CodeContent;
          }
        }
      }
    }
  } catch(e) {}
}

if (insightsCode) {
  fs.writeFileSync('./app/components/Insights.tsx', insightsCode);
  console.log('Restored Insights.tsx');
}
if (finalCtaCode) {
  fs.writeFileSync('./app/components/FinalCta.tsx', finalCtaCode);
  console.log('Restored FinalCta.tsx');
}
