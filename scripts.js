function searchFunction() {
    var input, filter, ul, li, i, txtValue, tagFilter, found;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    tagFilter = document.getElementById("tagFilter").value;
    ul = document.getElementById("ccaList");
    li = ul.getElementsByTagName("li");
    found = false;

    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        let tag = li[i].querySelector(".tag");
        let tagValue = tag ? tag.classList[1] : "";

        let matchesText = txtValue.toUpperCase().indexOf(filter) > -1;
        let matchesTag = tagFilter === "all" || tagValue === tagFilter;

        if (matchesText && matchesTag) {
            li[i].style.display = "";
            found = true;
        } else {
            li[i].style.display = "none";
        }
    }

    document.getElementById("noResults").style.display = found ? "none" : "block";
}