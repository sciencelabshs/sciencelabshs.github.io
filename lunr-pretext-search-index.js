var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Haranatha Sarma Sridhara   Educational Research    EDZ One International  Rajahmahendravaram, Andhra Pradesh, India   shsarma@edz.one       To share some of the ideas in adopting the technology for making teaching and learning simple, fun, explorative and engaging for every one.  How to Work   Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.    Swamy Vivekananda, Great Indian Saint     "
},
{
  "id": "homepage-3",
  "level": "1",
  "url": "homepage-3.html",
  "type": "Section",
  "number": "1",
  "title": "My Works",
  "body": "My Works   zerosciencelab  This is an online learning and teaching platform adopting research based curriculum mapped to CBSE syllabus. Use the following link to access the demo website   demo.zerosciencelab.com    "
},
{
  "id": "homepage-3-2",
  "level": "2",
  "url": "homepage-3.html#homepage-3-2",
  "type": "Project",
  "number": "1.1",
  "title": "zerosciencelab.",
  "body": " zerosciencelab  This is an online learning and teaching platform adopting research based curriculum mapped to CBSE syllabus. Use the following link to access the demo website   demo.zerosciencelab.com   "
},
{
  "id": "homepage-4",
  "level": "1",
  "url": "homepage-4.html",
  "type": "Section",
  "number": "2",
  "title": "For grins",
  "body": "For grins  If you are reading this page on a computer screen or similarly large display, there should be a \"Calc\" button near the left edge of the browser window, just above the text. Clicking on it should launch a Geogebra graphing calculator in the right margin. Kathy's college algebra textbook includes an appendix giving some instructions for using the app.  "
},
{
  "id": "homepage-5",
  "level": "1",
  "url": "homepage-5.html",
  "type": "Section",
  "number": "3",
  "title": "Brief Bio",
  "body": "Brief Bio     Earned three degrees from S.K. University: B.Sc., M.Sc., and Ph.D. in Physics.    Taught part-time at S. K. U. P. G. Center, 1997 2007, to PG Students continuing as a Research Scholar.    Taught full-time at Dr.KVSR, Engineering College, 2007 2008    Taught full-time at Pullaiah, Engineering College, 2008 2009    Conducted hands on workshops for School and College Students as Freelance Science Educator and Researcher from 2009 to 2020    Joined EDZ One International Privated Limited, Rajamahendravaram, India as Director, Academic Technical Research since 2020. Involved in designing and implementing curriculum and teaching strategies. We are using just enough technology      A photo of us at International Symposium on Developing Schools Creatively (Hyderabad, India), courtesy of CCE, Finalnd  Join Us, July 2019   "
},
{
  "id": "homepage-6-1",
  "level": "1",
  "url": "homepage-6-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This webpage was authored in PreTeXt.  "
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
