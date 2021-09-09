var fs = require('fs');
var request = require('request');

var zpl = "^XA^FWR^PW500^PA0,1,1,1^LH0,5^MFN,N^MD15^CI28^CW1,E:ANGSA.TTF^LL700,^FS^FO290,10^A1,50,50^FD����:�ѭ��� �����õԾѲ��^FS^XZ";

var options = {
    encoding: null,
    formData: { file: zpl },
    // omit this line to get PNG images back
    headers: { 'Accept': 'application/pdf' },
    // adjust print density (8dpmm), label width (4 inches), label height (6 inches), and label index (0) as necessary
    url: 'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/'
};

request.post(options, function(err, resp, body) {
    if (err) {
        return console.log(err);
    }
    var filename = 'label.pdf'; // change file name for PNG images
    fs.writeFile(filename, body, function(err) {
        if (err) {
            console.log(err);
        }
    });
});