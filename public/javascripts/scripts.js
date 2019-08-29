var teamsByConference = {
    A: ["Select Below", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "North Carolina", "North Carolina State", "Pittsburgh", "Syracuse", "Virginia", "Virginia Tech", "Wake Forest"],
    B: ["Select Below", "Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "Wisconsin"],
    C: ["Select Below", "Baylor", "Iowa State", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia"],
    D: ["Select Below", "Arizona", "Arizona State", "California", "UCLA", "Colorado", "Oregon", "Oregon State", "USC", "Stanford", "Utah", "Washington", "Washington State"],
    E: ["Select Below", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "Louisiana State", "Mississippi", "Mississippi State", "Missouri", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt"]
    }
   
    
var teamsById = {
    "Boston College": ["4b3ff02c-e0ba-435b-a565-6075bc491684"],
    "Clemson": ["dcf5c2e7-c227-4c20-af26-715d5f859412"],
    "Duke": ["faeb1160-5d15-4f26-99fc-c441cf21fc7f"],
    "Florida State": ["d3c8a767-b6fc-45d4-a5f2-18406f2993f1"],
    "Georgia Tech": ["0f63a6f5-bda7-4fd9-9271-8d33f555ca19"],
    "Louisville": ["b795ddbc-baab-4499-8803-52e8608520ab"],
    "Miami": ["7aec5187-cb1b-45e5-8f7d-406d766cdc73"],
    "North Carolina": ["e9ca48b2-00ba-41c0-a02b-6885a2da1ff1"],
    "North Carolina State": ["52df1e19-b142-4a76-a439-ad68455d0581"],
    "Pittsburgh": ["24051034-96bb-4f78-a3a6-312f3258780f"],
    "Syracuse": ["8cd24de1-2be8-4b77-bcfa-47be0495a5f4"],
    "Virginia": ["56913910-87f7-4ad7-ae3b-5cd9fb218fd9"],
    "Virginia Tech": ["324ccccc-575b-4b82-acb0-fbb8e68da13b"],
    "Wake Forest": ["4fbebf0a-e117-4a0c-8f15-c247535a2a1b"],
    "Illinois": ["150148c2-ca8f-414f-8f41-d94a55d4a122"],
    "Indiana": ["c3f0a8ce-af67-497f-a750-3b859376b20a"],
    "Iowa": ["c10544de-e3bd-4776-ba2e-83df8c017fd1"],
    "Maryland": ["2778d005-cc14-4e58-9bf2-3fc37bffb62f"],
    "Michigan": ["bdc2561d-f603-4fab-a262-f1d2af462277"],
    "Michigan State": ["a41d5a05-4c11-4171-a57e-e7a1ea325a6d"],
    "Minnesota": ["fa416692-7e09-4f0a-9bcf-0cf7d5149a14"],
    "Nebraska": ["f8b1bf00-5b73-4ac4-98c0-ec554027ae32"],
    "Northwestern": ["4b7dedc0-7b48-49a4-aad6-8a94a33274d2"],
    "Ohio State": ["857462b3-0ab6-4d26-9669-10ca354e382b"],
    "Penn State": ["4aebd148-8119-4875-954c-66779867989b"],
    "Purdue": ["12d7f888-675b-459f-9099-a38f771d8a95"],
    "Rutgers": ["b03bb029-4499-4a2c-9074-5071ed360b21"],
    "Wisconsin": ["c7569eae-5b93-4197-b204-6f3a62146b25"],
    "Baylor": ["db6e1cab-3fa3-4a93-a673-8b2a358ff4bf"],
    "Iowa State": ["0e4258fa-3154-4c16-b693-adecab184c6c"],
    "Kansas": ["fae4855b-1b64-4b40-a632-9ed345e1e952"],
    "Kansas State": ["d203f38a-a166-4258-bca2-e161b591ecfb"],
    "Oklahoma": ["b2fda957-e15c-4fb2-8a13-6e58496f561e"],
    "Oklahoma State": ["8ab00d43-840a-4c96-bdee-bf88fa6e3f11"],
    "TCU": ["f7fcbb6e-4a55-41ea-ba21-f763ed914467"],
    "Texas": ["6ed15092-2670-450a-99c2-61d861e87644"],
    "Texas Tech": ["f8c705b7-87d3-411a-9c8b-5124daab0469"],
    "West Virginia": ["f770d3a2-221c-49ce-9c7a-680f7417fe9e"],
    "Arizona": ["9b166a3f-e64b-4825-bb6b-92c6f0418263"],
    "Arizona State": ["ad4bc983-8d2e-4e6f-a8f9-80840a786c64"],
    "California": ["aacdc78d-b7fa-48f6-9686-2fdb8a95030e"],
    "UCLA": ["ec0d6b67-4b16-4b50-92b2-1a651dae6b0f"],
    "Colorado": ["9fccbf28-2858-4263-821c-fdefb3c7efa3"],
    "Oregon": ["1da70895-f77f-44ef-b216-d63c02e696eb"],
    "Oregon State": ["532d3874-b4b3-4c5c-acc6-749a6db26c8f"],
    "USC": ["3a000455-de7c-4ca8-880e-abdce7f21da9"],
    "Stanford": ["683ab61f-546f-44da-b085-c3a5740554aa"],
    "Utah": ["0d037a5d-827a-44dd-8b70-57603d671d5d"],
    "Washington": ["e52c9644-717a-46f4-bf16-aeca000b3b44"],
    "Washington State": ["2d4f0015-adb4-4877-8c15-4a6eed7eed03"],
    "Alabama": ["c2104cdc-c83d-40d2-a3cd-df986e29f5d3"],
    "Arkansas": ["c70c23c4-ab09-4797-a1af-792c848ab17f"],
    "Auburn": ["0c0608b3-f349-4f5e-9a10-7e6a744dd0d2"],
    "Florida": ["912f8837-1d81-4ef9-a576-a21f271d4c64"],
    "Georgia": ["4f4b0771-994c-4126-822d-7525aaa00f65"],
    "Kentucky": ["2267a1f4-68f6-418b-aaf6-2aa0c4b291f1"],
    "Louisiana State": ["70e2bedd-3a0a-479c-ac99-e3f58aa6824b"],
    "Mississippi": ["d7d668ec-edaa-4d6b-be25-2ebba4128643"],
    "Mississippi State": ["a1ba4b89-d97c-44e2-835f-79ad3ccaa5ae"],
    "Missouri": ["77ca152a-cb2f-48a5-97b2-492351250d94"],
    "South Carolina": ["1c7ec608-3b36-4cee-adac-9265e3792597"],
    "Tennessee": ["b827dbdf-230f-4916-9703-3bb9004e26eb"],
    "Texas A&M": ["ef184799-d79b-49d9-a662-991eaf4044cd"],
    "Vanderbilt": ["72971b77-1d35-40b3-bb63-4c5b29f3d22b"]
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

function getPic(){
        fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=1&q=Taylor%20Swift&safeSearch=false", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "cffa55f1e4mshf017575a2abddd4p1a360ajsnf8cb590c48d8"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}



function confettiToggle() {
        confetti.toggle();
}