function toggle_el(id){
    let element = document.getElementById(id);
    if (element.style.display == 'none'){
        element.style.display = 'block';
    }else{
        element.style.display = 'none';
    }
}
document.getElementById('show_help').addEventListener(
    'click',
    function(){toggle_el('help')}
)
function calc_parse(){
    let inp = document.getElementById('calc_input');
    let data = inp.value;
    data = data.replace(' ', '');
    if (data.indexOf('+')!=-1){
        let operands = data.split('+');
        inp.value = parseFloat(operands[0])+parseFloat(operands[1]);
    }else if (data.indexOf('-')!=-1){
        let operands = data.split('-');
        inp.value = parseFloat(operands[0])-parseFloat(operands[1]);
    }else if (data.indexOf('*')!=-1){
        let operands = data.split('*');
        inp.value = parseFloat(operands[0])*parseFloat(operands[1]);
    }else if (data.indexOf('/')!=-1){
        let operands = data.split('/');
        if (operands[1] == '0'){
            inp.value = "Can't divide by 0!";
        }else{
            inp.value = parseFloat(operands[0])/parseFloat(operands[1]);
        }
    }else if (data.indexOf('^')!=-1){
        let operands = data.split('^');
        inp.value = parseFloat(operands[0])**parseFloat(operands[1]);
    }
}
document.getElementById('calc_start').addEventListener(
    'click',
    calc_parse
)