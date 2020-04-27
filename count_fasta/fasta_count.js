  function countFasta(content) {
    var lines = content.split('\n')
    console.log(lines);
    var count = 0;
    var seqlen = [];
    var header = [];
    for (var i = 0; i < lines.length; i++) {
      if ( lines[i].startsWith('>') ) {
        if ( header.length == 0 ) {
        header.push(lines[i].slice(1))
        continue
        }
        else {
          header.push(lines[i].slice(1))
          seqlen.push(count)
          count = 0
          continue
        }
      }
      else {
        count += lines[i].length
        console.log(count)
      }
    }
    seqlen.push(count)
    console.log(header)
    console.log(seqlen)
    printSeqs(header, seqlen)
  }


  function printSeqs(header, seqlen) {
    var myseqs = ''
    for ( let i = 0; i < header.length; i++) {
      myseqs += `${header[i]}\t${seqlen[i]} bp\n`
    }
    console.log(myseqs)
    document.getElementById("seqlen").innerHTML = myseqs.trim();
  }
  

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    for (var i = 0, f; f = files[i]; i++) {
      console.log(f)
      var reader = new FileReader();
      reader.readAsText(f);
      reader.onload = function () {
        var content = reader.result;
        countFasta(content);
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