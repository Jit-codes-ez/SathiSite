export default async function handler(req, res) {

  const path = req.query.path;

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).send("Token missing");
  }

  try {

    const response = await fetch(
      `https://api.github.com/repos/Jit-codes-ez/SathiSitePrivate/contents/${path}`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3.raw"
        }
      }
    );

    if (!response.ok) {

      const errorText = await response.text();

      return res
        .status(response.status)
        .send(errorText);
    }

    const arrayBuffer =
      await response.arrayBuffer();

    const buffer =
      Buffer.from(arrayBuffer);

    res.setHeader(
      "Content-Type",
      response.headers.get("content-type")
    );

    return res.send(buffer);

  } catch (err) {

    return res.status(500).send(err.message);
  }
}