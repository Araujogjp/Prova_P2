const colors = [
  "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", 
  "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", 
  "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", 
  "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", 
  "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", 
  "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", 
  "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
  "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", 
  "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", 
  "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", 
  "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", 
  "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", 
  "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", 
  "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
  "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", 
  "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", 
  "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", 
  "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", 
  "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", 
  "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", 
  "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

function getRandomColors(colorList, count) {
  const shuffled = [...colorList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const selectedColors = getRandomColors(colors, 10);

function pickRandomColor(selectedList) {
  const randomIndex = Math.floor(Math.random() * selectedList.length);
  return selectedList[randomIndex];
}

const randomColor = pickRandomColor(selectedColors);

console.log("Cores escolhidas originalmente:");
console.log(selectedColors);

console.log("\nCor aleatória escolhida:");
console.log(randomColor);



