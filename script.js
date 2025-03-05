function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // Show selected section with animation
    let section = document.getElementById(sectionId);
    if (section) {
        section.style.display = "block";
        section.classList.add("fade-in");
    }
}
