var teamsByConference = {
    A: ["BC", "CLEM", "DUKE", "FSU", "GT", "LOU", "MIA", "UNC", "NCST", "PITT", "SYR", "UVA", "VT", "WAKE"],
    B: ["ILL", "IND", "IOWA", "MD", "MICH", "MSU", "MINN", "NEB", "NW", "OSU", "PSU", "PUR", "RUTG", "WIS"],
    C: ["BAY", "ISU", "KU", "KSU", "OKLA", "OKST", "TCU", "TEX", "TTU", "WVU"],
    D: ["ARIZ", "ASU", "CAL", "UCLA", "COLO", "ORE", "ORST", "USC", "STAN", "UTAH", "WASH", "WSU"],
    E: ["ALA", "ARK", "AUB", "FLA", "UGA", "UK", "LSU", "MISS", "MSST", "MIZZ", "SCAR", "TENN", "TXAM", "VAN"]
    }
    
    function changeconf(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
    var catOptions = "";
    for (categoryId in teamsByConference[value]) {
    catOptions += "<option>" + teamsByConference[value][categoryId] + "</option>";
    }
    document.getElementById("category").innerHTML = catOptions;
    }
    }
    