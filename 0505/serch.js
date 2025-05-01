function searchText() {
    const input = document.getElementById("searchInput").value;
    const content = document.getElementById("content");
    const text = content.textContent;

    // 既存のマークをクリア
    content.innerHTML = text;

    if (input === "") return;

    const regex = new RegExp(`(${input})`, "gi");
    const highlighted = text.replace(regex, "<mark>$1</mark>");
    content.innerHTML = highlighted;
  }
  