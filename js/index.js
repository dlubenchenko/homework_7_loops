var n = Number(prompt('Input your number'));
var sum = fibonachi(n);
var text = 'Your Fibonachi number is ';
var result = text + sum;


function fibonachi(n) {
    var firsFib = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        firsFib.push();
        var result = firsFib[i - 2] + firsFib[i - 1];
        firsFib[i] = result;
        console.log(firsFib[i]);

    }
        return firsFib[n];    
}

document.write(result);