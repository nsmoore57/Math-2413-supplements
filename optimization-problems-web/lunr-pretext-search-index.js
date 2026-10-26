var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "optimization-problems-document",
  "level": "1",
  "url": "#optimization-problems-document",
  "type": "Article",
  "number": "",
  "title": "Section 3.7 Optimization Problems",
  "body": " Section 3.7 Optimization Problems   Section 3.7: Optimization Problems    Guidelines   Draw a picture and name the variables and constants.  Write an equation for the quantity that is to be maximized or minimized  Reduce the equation to have a single variable. May need to use other equations or constraints  Determine feasible range for independent variable. So, the values that \"make sense\"  Use calculus techniques to find the maximum\/minimum      We want to design an open box with square base and surface area of sq inches. What dimensions will produce a box with maximum volume?      What point(s) on the graph of are the closest to the point ?      Two posts, one feet high and the other feet high, stand feet apart. They are to be stayed by two wires, attached to a single stake, running from ground level to the top of each post. Where should the stake be placed to use the least amount of wire?      An open-top box is made by cutting small squares from the corners of a 12 by 12 sheet of tin, bending up the sides. How large should the squares cut from the corners be to made the box hold as much as possible?      Four feet of wire is to be used to form a square and a circle. How much of the wire should be used for the square and how much should be used for the circle to enclose the maximum total area?     "
},
{
  "id": "optimization-problems-open-box",
  "level": "2",
  "url": "#optimization-problems-open-box",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " We want to design an open box with square base and surface area of sq inches. What dimensions will produce a box with maximum volume?  "
},
{
  "id": "optimization-problems-closest-points",
  "level": "2",
  "url": "#optimization-problems-closest-points",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " What point(s) on the graph of are the closest to the point ?  "
},
{
  "id": "optimization-problems-two-posts",
  "level": "2",
  "url": "#optimization-problems-two-posts",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Two posts, one feet high and the other feet high, stand feet apart. They are to be stayed by two wires, attached to a single stake, running from ground level to the top of each post. Where should the stake be placed to use the least amount of wire?  "
},
{
  "id": "optimization-problems-box-cutting-corners",
  "level": "2",
  "url": "#optimization-problems-box-cutting-corners",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " An open-top box is made by cutting small squares from the corners of a 12 by 12 sheet of tin, bending up the sides. How large should the squares cut from the corners be to made the box hold as much as possible?  "
},
{
  "id": "optimization-problems-square-circle",
  "level": "2",
  "url": "#optimization-problems-square-circle",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Four feet of wire is to be used to form a square and a circle. How much of the wire should be used for the square and how much should be used for the circle to enclose the maximum total area?  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
