window.onload = function() {
    const htmlContent = `
        <div class="bottombar">
            <a href="../../index.html" class="home-linker">
                <div class="button">
                    <img src="../../images/buttons/home.png" class="button-img selected-img">
                    <h5 class="button-text selected-text">Home</h5>
                </div>
            </a>
            <a href="index.html" class="bible-linker">
                <div class="button">
                    <img src="../../images/buttons/bible.png" class="button-img">
                    <h5 class="button-text">Bible</h5>
                </div>
            </a>
            <a href="../notes/index.html" class="notes-linker">
                <div class="button">
                    <img src="../../images/buttons/notes.png" class="button-img">
                    <h5 class="button-text">Notes</h5>
                </div>
            </a>
            <a href="../../index.html" class="translations-linker">
                <div class="button">
                    <img src="../../images/buttons/translations.png" class="button-img">
                    <h5 class="button-text">Translations</h5>
                </div>
            </a>
            <a href="../../index.html" class="menu-linker">
                <div class="button">
                    <img src="../../images/buttons/menu.png" class="button-img">
                    <h5 class="button-text">Menu</h5>
                </div>
            </a>
        </div>`;

    document.body.insertAdjacentHTML('afterbegin', htmlContent);
};
