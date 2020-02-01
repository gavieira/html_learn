  function countFasta(content) {
    var lines = content.split('\n')
    console.log(lines);
    var count = 0;
    var header = '';
    for (var i = 0; i < lines.length; i++) {
      if ( lines[i].startsWith('>') ) {
        header = lines[i].slice(1) + ":"
        continue
      }
      else {
        count += lines[i].length
      }
    }
      document.getElementById("seqlen").innerHTML = `${header} ${count} bp` 
    }

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    for (var i = 0, f; f = files[i]; i++) {
      console.log(f)
      var reader = new FileReader();
      reader.readAsText(f);
      reader.onload = function () {
        var content = reader.result;
        document.getElementById("content").innerHTML = content;
        countFasta(content)
      }
    }
  }


  function handleTextContent(evt) {
    var content = document.getElementById("textbox").value
    //console.log(content)
    countFasta(content)
  }


  document.getElementById('textbox').addEventListener('change', handleTextContent, false);
  document.getElementById('fasta').addEventListener('change', handleFileSelect, false);