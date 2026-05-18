export default async function handler(req, res) {
  try {
    const filePath = req.query.path;
    if (!filePath || !filePath.startsWith("Images/")) {
      return res.status(403).send("Forbidden");
    }
    const response = await fetch(
      `https://api.github.com/repos/Jit-codes-ez/SathiSitePrivate/contents/${filePath}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3.raw"
        }
      }
    );
    if (!response.ok) {
      return res.status(404).send("Image not found");
    }
    const buffer = await response.arrayBuffer();
    const ext = filePath.split(".").pop();
    const mimeTypes = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp"
    };
    res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("Server error");
  }
}