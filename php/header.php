<!DOCTYPE html>
<div class="header" id="header">
        <div class="dropdown">
            <button id="langSelector" class="headerbtn"><img src="/imgs/flags/lang-selector.svg"></button>
                <div class="dropdown-content-container">
                    <div class="dropdown-content">
                        <button onclick="doTranslation('en')" name="uk" type="button" class="flag">
                            <img id='flagen' height='30px' src="/imgs/flags/flagen.png">
                            <p3>English</p3>
                        </button>
                        <button style="display: none;" onclick="doTranslation('de')" name="germany" type="button" class="flag">
                            <img id='flagde' height='30px' src="/imgs/flags/flagde.png">
                            <p3>Deutsch</p3>
                        </button>
                        <button onclick="doTranslation('nl')" name="netherlands" type="button" class="flag">
                            <img id='flagnl' height='30px' src="/imgs/flags/flagnl.png">
                            <p3>Nederlands</p3>
                        </button>
                        <button style="display: none;" onclick="doTranslation('fr')" name="fr" type="button" class="flag">
                            <img id="flagfr" height="30px" src="/imgs/flags/flagfr.png">
                            <p3>Français</p3>
                        </button>
                        <button onclick="doTranslation('vk')" name="viviolask" type="button" class="flag">
                            <img id='flagvk' height='30px' src="/imgs/flags/flagvk.png">
                            <p3>Viviöläzk</p3>
                        </button>
                    </div>
                </div>
            </div>
        <div id="navTitleDOM" class="title">
            <a href="/" id="Бnavbar-jelnet"></a>
        </div>
        <div id="navExternalInternal" class="navbar">
            <a href="/" class="left active" id="Бnavbar-home"></a>
            <a href="/internal" class="middle" id="Бnavbar-internal"></a>                
            <a href="/external" class="right" id="Бnavbar-external"></a>
        </div>
        <div class='theme-selection'>
            <button class="headerbtn" type="button" onclick="toggleTheme()">
                <img height='30px' id="themesvg" src="/imgs/darkmode-lightmode/dark-mode.svg">
            </button>
        </div>
    </div>
</div>