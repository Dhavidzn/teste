import * as fs from "fs";
import * as http from "https";
import { execSync } from "child_process";

const url = "https://ais-pre-3mzgd6sblmtpb54a4a32al-828730572153.us-east1.run.app/Satellite_zooming_out_from_Earth_202606202308.mp4";
const outputPath = "/app/applet/public/Satellite_zooming_out_from_Earth_202606202308.mp4";

console.log("Downloading clean video from:", url);

const file = fs.createWriteStream(outputPath);

const request = http.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download: Status Code ${response.statusCode}`);
    process.exit(1);
  }
  
  response.pipe(file);
  
  file.on("finish", () => {
    file.close();
    console.log("Download completed. Checking downloaded file size...");
    const stats = fs.statSync(outputPath);
    console.log(`Downloaded file size: ${(stats.size / 1024 / 1024).toFixed(3)} MB`);
    
    // Check with ffprobe
    try {
      const info = execSync(`ffprobe -v error -show_format -show_streams "${outputPath}"`, { encoding: "utf-8" });
      console.log("SUCCESS! The downloaded video is valid and uncorrupted!");
      console.log(info);
    } catch (err: any) {
      console.error("The downloaded file is still reporting an error:", err.message || err);
    }
  });
}).on("error", (err) => {
  console.error("HTTP error during download:", err);
  process.exit(1);
});
