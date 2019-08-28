var teamsByConference = {
    A: ["Select Below", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisiana", "Miami", "North Carolina", "North Carolina State", "Pittsburgh", "Syracuse", "Virginia", "Virginia Tech", "Wake Forest"],
    B: ["Select Below", "Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Oklahoma State", "Penn State", "Purdue", "Rutgers", "Wisconsin"],
    C: ["Select Below", "Baylor", "Iowa State", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia"],
    D: ["Select Below", "Arizona", "Arizona State", "California", "UCLA", "Colorado", "Oregon", "Oregon State", "USC", "Stanford", "Utah", "Washington", "Washington State"],
    E: ["Select Below", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "Louisiana State", "Mississippi", "Mississippi State", "Missouri", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt"]
    }
   
    
var teamsById = {
    BC: ["4b3ff02c-e0ba-435b-a565-6075bc491684"],
    CLEM: ["dcf5c2e7-c227-4c20-af26-715d5f859412"],
    DUKE: ["faeb1160-5d15-4f26-99fc-c441cf21fc7f"],
    FSU: ["d3c8a767-b6fc-45d4-a5f2-18406f2993f1"],
    GT: ["0f63a6f5-bda7-4fd9-9271-8d33f555ca19"],
    LOU: ["b795ddbc-baab-4499-8803-52e8608520ab"],
    MIA: ["7aec5187-cb1b-45e5-8f7d-406d766cdc73"],
    UNC: ["e9ca48b2-00ba-41c0-a02b-6885a2da1ff1"],
    NCST: ["52df1e19-b142-4a76-a439-ad68455d0581"],
    PITT: ["24051034-96bb-4f78-a3a6-312f3258780f"],
    SYR: ["8cd24de1-2be8-4b77-bcfa-47be0495a5f4"],
    UVA: ["56913910-87f7-4ad7-ae3b-5cd9fb218fd9"],
    VT: ["324ccccc-575b-4b82-acb0-fbb8e68da13b"],
    WAKE: ["4fbebf0a-e117-4a0c-8f15-c247535a2a1b"],
    ILL: ["150148c2-ca8f-414f-8f41-d94a55d4a122"],
    IND: ["c3f0a8ce-af67-497f-a750-3b859376b20a"],
    IOWA: ["c10544de-e3bd-4776-ba2e-83df8c017fd1"],
    MD: ["2778d005-cc14-4e58-9bf2-3fc37bffb62f"],
    MICH: ["bdc2561d-f603-4fab-a262-f1d2af462277"],
    MSU: ["a41d5a05-4c11-4171-a57e-e7a1ea325a6d"],
    MINN: ["fa416692-7e09-4f0a-9bcf-0cf7d5149a14"],
    NEB: ["f8b1bf00-5b73-4ac4-98c0-ec554027ae32"],
    NW: ["4b7dedc0-7b48-49a4-aad6-8a94a33274d2"],
    OSU: ["857462b3-0ab6-4d26-9669-10ca354e382b"],
    PSU: ["4aebd148-8119-4875-954c-66779867989b"],
    PUR: ["12d7f888-675b-459f-9099-a38f771d8a95"],
    RUTG: ["b03bb029-4499-4a2c-9074-5071ed360b21"],
    WIS: ["c7569eae-5b93-4197-b204-6f3a62146b25"],
    BAY: ["db6e1cab-3fa3-4a93-a673-8b2a358ff4bf"],
    ISU: ["0e4258fa-3154-4c16-b693-adecab184c6c"],
    KU: ["fae4855b-1b64-4b40-a632-9ed345e1e952"],
    KSU: ["d203f38a-a166-4258-bca2-e161b591ecfb"],
    OKLA: ["b2fda957-e15c-4fb2-8a13-6e58496f561e"],
    OKST: ["8ab00d43-840a-4c96-bdee-bf88fa6e3f11"],
    TCU: ["f7fcbb6e-4a55-41ea-ba21-f763ed914467"],
    TEX: ["6ed15092-2670-450a-99c2-61d861e87644"],
    TTU: ["f8c705b7-87d3-411a-9c8b-5124daab0469"],
    WVU: ["f770d3a2-221c-49ce-9c7a-680f7417fe9e"],
    ARIZ: ["9b166a3f-e64b-4825-bb6b-92c6f0418263"],
    ASU: ["ad4bc983-8d2e-4e6f-a8f9-80840a786c64"],
    CAL: ["aacdc78d-b7fa-48f6-9686-2fdb8a95030e"],
    UCLA: ["ec0d6b67-4b16-4b50-92b2-1a651dae6b0f"],
    COLO: ["9fccbf28-2858-4263-821c-fdefb3c7efa3"],
    ORE: ["1da70895-f77f-44ef-b216-d63c02e696eb"],
    ORST: ["532d3874-b4b3-4c5c-acc6-749a6db26c8f"],
    USC: ["3a000455-de7c-4ca8-880e-abdce7f21da9"],
    STAN: ["683ab61f-546f-44da-b085-c3a5740554aa"],
    UTAH: ["0d037a5d-827a-44dd-8b70-57603d671d5d"],
    WASH: ["e52c9644-717a-46f4-bf16-aeca000b3b44"],
    WSU: ["2d4f0015-adb4-4877-8c15-4a6eed7eed03"],
    ALA: ["c2104cdc-c83d-40d2-a3cd-df986e29f5d3"],
    ARK: ["c70c23c4-ab09-4797-a1af-792c848ab17f"],
    AUB: ["0c0608b3-f349-4f5e-9a10-7e6a744dd0d2"],
    FLA: ["912f8837-1d81-4ef9-a576-a21f271d4c64"],
    UGA: ["4f4b0771-994c-4126-822d-7525aaa00f65"],
    UK: ["2267a1f4-68f6-418b-aaf6-2aa0c4b291f1"],
    LSU: ["70e2bedd-3a0a-479c-ac99-e3f58aa6824b"],
    MISS: ["d7d668ec-edaa-4d6b-be25-2ebba4128643"],
    MSST: ["a1ba4b89-d97c-44e2-835f-79ad3ccaa5ae"],
    MIZZ: ["77ca152a-cb2f-48a5-97b2-492351250d94"],
    SCAR: ["1c7ec608-3b36-4cee-adac-9265e3792597"],
    TENN: ["b827dbdf-230f-4916-9703-3bb9004e26eb"],
    TXAM: ["ef184799-d79b-49d9-a662-991eaf4044cd"],
    VAN: ["72971b77-1d35-40b3-bb63-4c5b29f3d22b"]
    }
    function changeconf(value) {
    if (value.length == 0) document.getElementById("faveteams").innerHTML = "<option></option>";
    else {
    var catOptions = "";
    for (categoryId in teamsByConference[value]) {
    catOptions += "<option>" + teamsByConference[value][categoryId] + "</option>";
    }
    document.getElementById("faveteams").innerHTML = catOptions;
    }
    }
    
    function changeid(value) {
        if (value.length == 0) document.getElementById("teamId").innerHTML = "<option></option>";
        else {
        var catOptions = "";
        for (categoryId in teamsById[value]) {
        catOptions += "<option>" + teamsById[value][categoryId] + "</option>";
        }
        document.getElementById("teamId").innerHTML = catOptions;
        }
        }