
function runCode() {
    const code = document.getElementById('editor').value;
    const resultFrame = document.getElementById('resultFrame').contentDocument;
    resultFrame.open();
    resultFrame.write(code);
    resultFrame.close();
}

function setFullScreen() {
    const result = document.getElementById('result');
    result.className = 'full-screen';
}

function setPhoneSize() {
    const result = document.getElementById('result');
    result.className = 'phone-size';
}

function setTabletSize() {
    const result = document.getElementById('result');
    result.className = 'tablet-size';
}

function setDefaultSize() {
    const result = document.getElementById('result');
    result.className = '';
}
