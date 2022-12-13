function doTranslation                                                          (
    lan                                                                         ){
    setFlagBrightness                                                           (
    lan                                                                         );
    for                                                                         (
    temp in translations                                                        ){
    console.log                                                                 (
    "%ctranslated element: %c"                                                  +
    temp                                                                        ,
    "color:orange;"                                                             ,
    "color: lightgray;"                                                         )
    let id                                                                      =
    "Б"                                                                         +
    temp                                                                        ;
    element                                                                     =
    document.getElementById                                                     (
    id                                                                          );
    if                                                                          (
    temp                                                                        ==
    "To_be_determined"                                                          ||
    temp                                                                        ==
    "Nonapplicable"                                                             ){
    for                                                                         (
    let i                                                                       =
    2                                                                           ;
    i                                                                           <
    6                                                                           ;
    i                                                                           ++){
    let TBTid                                                                   =
    `${id}${i}`                                                                 ;
    element.innerHTML                                                           =
    translations[temp][lan]                                                     ;}}
    else if                                                                     (
    temp                                                                        ==
    'Email_Address'                                                             ||
    temp                                                                        ==
    'Nickname'                                                                  ||
    temp                                                                        ==
    'Subject'                                                                   ||
    temp                                                                        ==
    'Message'                                                                   ){
    element.placeholder                                                         =
    translations[temp][lan]                                                     ;}
    else                                                                        {
    element.innerHTML   	                                                    =
    translations[temp][lan]                                                     ;}}
}