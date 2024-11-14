window.onload = function() {
    const htmlContent = `
        <div class="bottombar">
            <a href="../../videos/" class="home-linker">
                <div class="button">
                    <img src="../../../images/buttons/home.png" class="button-img selected-img">
                    <h5 class="button-text selected-text">Home</h5>
                </div>
            </a>
            <a href="../../bible/" class="bible-linker">
                <div class="button">
                    <img src="../../../images/buttons/bible.png" class="button-img">
                    <h5 class="button-text">Bible</h5>
                </div>
            </a>
            <a href="../../notes/" class="notes-linker">
                <div class="button">
                    <img src="../../../images/buttons/notes.png" class="button-img">
                    <h5 class="button-text">Notes</h5>
                </div>
            </a>

            <a href="../../videos/" class="videos-linker">
                <div class="button">
                    <img src="../../../images/buttons/play.png" class="button-img">
                    <h5 class="button-text">Videos</h5>
                </div>
            </a>

            <a href="../../translations/" class="translations-linker">
                <div class="button">
                    <img src="../../../images/buttons/translations.png" class="button-img">
                    <h5 class="button-text">Translations</h5>
                </div>
            </a>
            <a href="../../menu/" class="menu-linker">
                <div class="button">
                    <img src="../../../images/buttons/menu.png" class="button-img">
                    <h5 class="button-text">Menu</h5>
                </div>
            </a>
        </div>`;

    document.body.insertAdjacentHTML('afterbegin', htmlContent);
};
