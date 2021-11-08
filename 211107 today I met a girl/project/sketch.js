let grammar;
let data = {
  "start": ["#[firstname:#firstName#][surname:#familyName#][villain:#monster#][sign:#sign#][adjemo:#emo#][signemo:#signemo#]story#"],
  "story": ["Dear diary:\r\n Today I met a #adj# girl called #firstname# #surname#. And that #firstname# told me she was #sign.a#. I was #adjemo# and told #firstname# that #sign.a# girl was suitable for a #signemo# guy like me. Then the #firstname# gave me a tight slap that I was blast out 10 meters away. I died. #exclamation#. What a nice day!"],
  "familyName": ['Wind','Bottom','Cue','Gotobed','Onions','Smellie','Hardmeat','Hickinbottom','Bieber','Hitler','Brown','Case','Przbyszewski','Zdzinski','Seaman','Bonner','Crapper','Trump','Pufpaff','McUgly','Gay','Butt','Obama','Long','Litoris','Neighborhoods','Bacon','Gouldstone','Pepper','Zeus','Waters','Hogshead'],
   "firstName":['Abcde','Alphabeta','Babyboy','Banana','Brick','Blue Jeans','Burger','Candida','Carrion','Chaos','Drug','Goodluck','Hashtag','Ikea','Shooter','Number 16 Bus Shelter','BOOB','Scar','Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116','Kingmessiah','Lucifer','Pilot Inspektor','Buddy Bear','Adobe','Author','Audio Science','Facebook','Balls','Ah','Flappy','Poof','O. Men','Motor','Spicy','Chatback','Arduino','Turtle'],
  "sign":['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
  "emo":['happy','amazed','shocked','cried'],
  "signemo":['⛎','♈️','♉️,','♊️','♋️,','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️'],
  "adj": ['beautiful', '😍', 'handsome', "🔥", 'bad', 'pretty', 'nice', 'smart', 'happy', 'cool', 'charming','hot','💕💕','💖','💗💗💗','💘','💓💓💓'],
  "exclamation": ['Congratulations!','Yooo', '👏👏👏👏👏','💯💯💯💯💯','🎊🎊🎊🎊🎊']
}

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  let button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  let clearButton = select('#clearButton');
  clearButton.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
  let elements = selectAll('.text');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function generate() {
  let expansion = grammar.flatten('#start#');
  // console.log(grammar.expand('#start#'));
  let par = createP(expansion);
  let r = floor(random(230, 255));
  let g = floor(random(180, 255));
  let b = floor(random(230, 255));
  par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  par.class('text');
}
