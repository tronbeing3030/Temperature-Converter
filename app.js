input = document.getElementById('initial');
output = document.getElementById('ans');
button = document.getElementById('button');
selectIn = document.getElementById('input');
selectOut = document.getElementById('output');

// input.value = float(input.value);
// output.value = float(output.value);

button.onclick = () => {
if (selectIn.value === 'c' && selectOut.value === 'f'){
    output.value = (input.value * 9/5) + 32;
}else if (selectIn.value === 'c' && selectOut.value === 'k'){
    output.value = parseFloat(input.value) + 273.15;
}else if (selectIn.value === 'f' && selectOut.value === 'c'){
    output.value = (input.value - 32) * 5/9;
}else if (selectIn.value === 'f' && selectOut.value === 'k'){
    output.value = ((input.value - 32) * 5/9) + 273.15;
}else if (selectIn.value === 'k' && selectOut.value === 'c'){
    output.value = input.value - 273.15;
}else if (selectIn.value === 'k' && selectOut.value === 'f'){
    output.value = ((input.value - 273.15) * 9/5) + 32;
}else{
    output.value = input.value;
}
}