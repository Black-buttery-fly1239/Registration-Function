function Registration(existingReg) {
    var regNo =  existingReg ||[]
   //console.log(existingReg);

    function theReg(reg) {
        reg = reg.toLowerCase()
        reg = reg.toUpperCase()
        if (reg) {
            if (!regNo.includes(reg)) {
                //console.log(!regNo);
                regNo.push(reg)
            }
        }
    }

    function setReg(reg) {
        regNo = reg;
    }
    
    function getReg() {
        return regNo 
    }
//ca 123333 ca 123-333 
    function checkValidate(regNumber) {
        // console.log(checkValidate);
        regNumber = regNumber.toUpperCase()
        var regNumberX = /(^[A-Z]{2}[\s][0-9]{3}[-\s][0-9]{2}$)|(^[A-Z]{2}[\s][0-9]{6}$)|(^[A-Z]{2}[\s][0-9]{3}[-\s][0-9]{3}$)/i ;
        var rexTest  = regNumberX.test(regNumber)
        if (regNumberX.test(regNumber)) {
            // theReg(regNumberX)
        }
       return rexTest;
       
    }

//     function plate(town){
//         var filteredReg = []
//         for(var i=0; i< town.length;i++){
//        if(town.startsWith("CK") || town.startsWith("CY") || town.startsWith("CA")){
//         filteredReg.push(town)
//        }
//    }
//    return filteredReg

//     }

function error(reg,town){
    if (!reg) {
         "Please enter valid registration number"
    }
    else if (reg) {
     "Registration number Added!"
    }
    else if(town === ""){
    "Please select Town"
    }
    else if(reg && town === null){
        "There is no matching registration number of that town at the current moment!"
    }
}


    function numberPlate(town) {
        var filteredReg = [] 
       for(var i=0; i< town.length; i++) {
           if(town.startsWith("CK")){
            mafilteredRegl.push(town)
           }
           if(town.startsWith("CY")){
            filteredReg.push(town)
           }
           if(town.startsWith("CA")){
            filteredReg.push(town)
           }
           
       }
       return filteredReg
    }
    
    return {
        theReg,
        getReg,
        checkValidate,
        error,
        numberPlate,
        setReg,
    }
}