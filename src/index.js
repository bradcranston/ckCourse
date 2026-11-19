

// JSON data containing skills
var skillsData = [
  {"area":"KNIFE SKILLS","skill":{"tier1":["Basic Knife handling","Identify types of knives and their uses","Perform Mince cut","Perform dice cut","Sharpen knife"],"tier2":["Perform julienne cut","Perform bias cut","Sharpen knife"],"tier3":["Sharpen knife"]}},
  {"area":"KITCHEN KNOWLEDGE, SAFETY & SANITATION","skill":{"tier1":["Wear appropriate uniform in the food preparation area","Kitchen etiquette and terms (behind, hot, sharp, etc): Week 1, reinforced weeks 2-4","Correctly set up a basic workstation (Mise en Place)\rCutting station set up: (Choose and apply correct knife/equipment for desired application, correct color coded board, towel below board, board aligned with edge of work surface)","Follow ServSafe Food Handler requirements","Correctly identify cuttong board colors and uses","Calibrate thermometer, demonstrate how to temp,  food safety zones","FIFO and proper food labeling (via cooler org and cleanout)","Utility (dish sink set up, mop bucket set up, sani bucket set up)"],"tier2":["Wear appropriate uniform in the food preparation area","Have a clear understanding of meat industry history, current industry climate and job opportunities in the field."]}}
  // Add more data as needed
];

// Function to create the skill list
function createSkillList(data) {
  var skillList = document.getElementById('skillList');

  data.forEach(function(item) {
    var listItem = document.createElement('li');
    var header = document.createElement('h2');
    header.textContent = item.area;
    listItem.appendChild(header);

    var skills = item.skill;
    for (var tier in skills) {
      var tierHeader = document.createElement('h3');
      tierHeader.textContent = 'Tier ' + tier.substring(4);
      listItem.appendChild(tierHeader);

      var skillsList = document.createElement('ul');
      skills[tier].forEach(function(skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
      });

      listItem.appendChild(skillsList);
    }

    skillList.appendChild(listItem);
  });
}

// Call the function with the skillsData
createSkillList(skillsData);