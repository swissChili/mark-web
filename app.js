var provider = new firebase.auth.GoogleAuthProvider()
//set Marked options
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})


//initialize jquery variables
$editor = $('#editor')
$output = $('#output')
$newFile = $('#newBtn')
$openFile = $('#openBtn')
$exportFile = $('#exportBtn')
$signIn = $('#signInBtn')

// initialize save function
var docNumber
var user = firebase.auth.currentUser


function saveFile(title, content, userID) {
  docNumber = firebase.database().ref(userID + '/docNumber')
  firebase.database().ref(userID + docNumber).set({
    title: title,
    content: content
  })
}


//initialize markdown conversion
$(document).ready(function() {
  $editor.on('input propertychange', function () {
    var outputHtml = marked($('#editor').val())
    $output.html(outputHtml)
    console.log($('#editor').val())

    // save files
    saveFile($title.text(), $editor.text(), user.uid)

  })
})
// new file btn
$newFile.click(function() {
  $editor.val("")
  docNumber = docNumber + 1
})

// signing with da googles

$signIn.click(function(){
  firebase.auth().signInWithRedirect(provider);
})
