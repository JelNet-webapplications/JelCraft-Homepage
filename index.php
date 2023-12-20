<!--
    <== Page information ==>
    Page name:          JelNet Homepage
    Creator:            JelCraft, Vivaloz
    Publisher:          JelCraft
    Date of creation:   In ieder geval ergens na 1594
-->

<!DOCTYPE html>
<html lang="en-NL" id="html">
    <head>
        <!-- Head -->
        <?php include("./php/head.php") ?>
        <title>JelNet</title>
    </head>
    <body onload="dTsC()">
        <!-- Overlays -->
        <?php include("./php/overlays.php") ?>
        <!-- Header/Navbar-->
        <?php include("./php/header.php") ?>
        <div class="grid-container" id="layout-container">
            <div class="grid-item" id="projects">
                <h1 id="Бcurtains-projects-title"></h1>
                <h1 onclick="showWIPdetails()" id="Бcurtains-projects-title-wip"></h1>
                <a href="http://jelcraft.tk/pinball-converter/">
                    <div class="paragraph" id="pinball-converter">
                        <img src="./imgs/project-icons/Pinball-Converter.svg">
                        <div>
                            <h2 id="Бcurtains-projects-pinballconverter-title"></h2>
                            <p3 id="Бcurtains-projects-pinballconverter-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-green1" class="projectstatus status-green"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/sudoku-solver/">
                    <div class="paragraph" id="sudokusolver">
                        <img src="./imgs/project-icons/SudokuSolver.svg">
                        <div>
                            <h2 id="Бcurtains-projects-sudokusolver-title"></h2>
                            <p3 id="Бcurtains-projects-sudokusolver-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-green2" class="projectstatus status-green"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/world-stats/">
                    <div class="paragraph" id="worldstats">
                        <img src="./imgs/project-icons/WorldStats.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-worldstats-title"></h2>
                            <p3 id="Бcurtains-projects-worldstats-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-green3" class="projectstatus status-green"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/flight-calculator/">
                    <div class="paragraph" id="flightcalculator">
                        <img height="57.4px" src="./imgs/project-icons/FlightCalculator.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-flightcalculator-title"></h2>
                            <p3 id="Бcurtains-projects-flightcalculator-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-green4" class="projectstatus status-green"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/collatz-calculator/collatz-conjecture-calculator.html">
                    <div class="paragraph" id="collatzcalculator">
                        <img height="57.4px" src="./imgs/project-icons/Collatz-Calculator.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-collatzcalculator-title"></h2>
                            <p3 id="Бcurtains-projects-collatzcalculator-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-yellow1" class="projectstatus status-yellow"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/sbubby-generator/">
                    <div class="paragraph" id="logomaker">
                        <img height="57.4px" src="./imgs/project-icons/sbubby.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-sbubbygenerator-title"></h2>
                            <p3 id="Бcurtains-projects-sbubbygenerator-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-yellow2" class="projectstatus status-yellow"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/starlabs-delivery/home/home.html">
                    <div class="paragraph" id="starlabsdelivery">
                        <img height="57.4px" src="./imgs/project-icons/starlabs.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-starlabsdelivery-title"></h2>
                            <p3 id="Бcurtains-projects-starlabsdelivery-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-yellow3" class="projectstatus status-yellow"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/pinball-physics/">
                    <div class="paragraph" id="pinball-physics">
                        <img height="57.4px" src="./imgs/project-icons/Pinball-physics.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-pinballphysics-title"></h2>
                            <p3 id="Бcurtains-projects-pinballphysics-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-yellow4" class="projectstatus status-yellow"></div>
                    </div>
                </a>
                <a href="http://jelcraft.tk/tafelvoetbal-scorebord/">
                    <div class="paragraph" id="foosballscoreboard">
                        <img height="57.4px" src="imgs/project-icons/foosball.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-foosballscoreboard-title"></h2>
                            <p3 id="Бcurtains-projects-foosballscoreboard-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-yellow5" class="projectstatus status-yellow"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="hangmanengine">
                        <img height="57.4px" src="./imgs/project-icons/hangman.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-hangmanengine-title"></h2>
                            <p3 id="Бcurtains-projects-hangmanengine-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red1" class="projectstatus status-red"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="wordfeudcalculator">
                        <img height="57.4px" src="./imgs/project-icons/wordfeud.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-wordfeudcalculator-title"></h2>
                            <p3 id="Бcurtains-projects-wordfeudcalculator-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red2" class="projectstatus status-red"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="viviolasktranslator">
                        <img height="57.4px" src="./imgs/project-icons/viviolasktranslator.svg">
                        <div>                        
                            <h2 id="Бcurtains-projects-viviolasktranslator-title"></h2>
                            <p3 id="Бcurtains-projects-viviolasktranslator-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red3" class="projectstatus status-red"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="dirkmap">
                        <img height="57.4px" src="./imgs/project-icons/dirk.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-dirkmap-title"></h2>
                            <p3 id="Бcurtains-projects-dirkmap-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red4" class="projectstatus status-red"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="chessbot">
                        <img height="57.4px" src="imgs/project-icons/chess.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-chessengine-title"></h2>
                            <p3 id="Бcurtains-projects-chessengine-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red5" class="projectstatus status-red"></div>
                    </div>
                </a>
                <a class="link-wip">
                    <div class="paragraph" id="tabcustomiser">
                        <img height="57.4px" src="imgs/project-icons/tabcustomiser.png">
                        <div>                        
                            <h2 id="Бcurtains-projects-tabcustomiser-title"></h2>
                            <p3 id="Бcurtains-projects-tabcustomiser-description"></p3>
                        </div>
                        <div id="Бcurtains-projects-status-red6" class="projectstatus status-red"></div>
                    </div>
                </a>
            </div>
            <div class="grid-item" id="about-us">
                <h1 id="Бcurtains-aboutus-title">About Us</h1>
                <a href="https://www.youtube.com/@JelCraft">
                    <div class="paragraph" >
                        <img height='75px' width='75px' src="./imgs/profile-pictures/pf-jelcraft.png">
                        <div>
                            <h2 id="Бcurtains-aboutus-jelcraft-title"></h2>
                            <p3 id="Бcurtains-aboutus-jelcraft-description"></p3>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/@vivaloz9085">
                    <div class="paragraph">
                        <img height='75px' width='75px' src="./imgs/profile-pictures/pf-vivaloz.png">
                        <div>
                            <h2 id="Бcurtains-aboutus-vivaloz-title"></h2>
                            <p3 id="Бcurtains-aboutus-vivaloz-description"></p3>
                        </div>
                    </div> 
                </a>
            </div>
            <!-- Contact/Discord server-->
            <?php include("./php/contact-discordserver.php") ?>
        </div>
        <!-- Footer -->
        <?php include("./php/footer.php") ?>
        <div id="contextmenu">
            <!-- <div>Change theme</div> -->
            <!-- <div>
                Change language
                <button onclick="doTranslation('en')" name="uk" type="button" class="contextflag">
                    <img id='flagen' height='30px' src="./imgs/flags/flagen.png">
                </button>
                <button style="display: none;" onclick="doTranslation('de')" name="germany" type="button" class="contextflag">
                    <img id='flagde' height='30px' src="./imgs/flags/flagde.png">
                </button>
                <button onclick="doTranslation('nl')" name="netherlands" type="button" class="contextflag">
                    <img id='flagnl' height='30px' src="./imgs/flags/flagnl.png">
                </button>
                <button style="display: none;" onclick="doTranslation('fr')" name="fr" type="button" class="contextflag">
                    <img id="flagfr" height="30px" src="./imgs/flags/flagfr.png">
                </button>
                <button onclick="doTranslation('vk')" name="viviolask" type="button" class="contextflag">
                    <img id='flagvk' height='30px' src="./imgs/flags/flagvk.png">
                </button>
            </div> -->
            <div id="Бpopup-contextmenu-entercursedmode">Enter cursed mode</div>
            <div id="Бpopup-contextmenu-speedupcursedmode">Speed up cursed mode</div>
            <div id="Бpopup-contextmenu-endcursedmode">End cursed mode</div>
            <div id="Бpopup-contextmenu-mobileversion">Force mobile version</div>
            <!-- <div>Swap home - internal - external</div>  -->
            <!-- <div>View privacy policy</div>  -->
            <div id="Бpopup-contextmenu-secretpage">Open secret page</div> 
            <div id="Бpopup-contextmenu-cookiepopup">Show cookie popup</div> 
            <div>
                <label id="Бpopup-contextmenu-renametab" for="renametab">Rename tab</label>
                <input id="renametab" type="text">
            </div>
        </div>
        <script src="./script/contextmenu.js"></script>
        <script src="./script/responsify.js"></script>
    </body>
</html>
