// read file content using fetch
async function fetchFileContent(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
}

// replace the header
fetchFileContent("jsBack/header.html").then(content => {
  if (content) {
    document.querySelector("header").innerHTML = content;
  }
});

// replace the footer
fetchFileContent("jsBack/footer.html").then(content => {
  if (content) {
    document.querySelector("footer").innerHTML = content;
  }
});
