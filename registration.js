describe("The Registration function", function() {
    it("should be able to set the registration number for Malmesbury (CK)", function(){
        
        let registrationSetting = Registration();

        registrationSetting.setReg("CK 123456");

        assert.equal(["CK 123456"], registrationSetting.getReg());
    });

    it("should be able to set the registration number for Belville (CY)", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg("CY 232425");

        assert.equal(["CY 232425"], registrationSetting.getReg());
    });

    it("should be able to set the registration number for Cape Town (CA)", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg("CA 333435");

        assert.equal(["CA 333435"], registrationSetting.getReg());
    });
});



describe("The CheckValidate function", function() {
    it("should only take these format CA 333435", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CA 333435"]);

        assert.deepEqual(["CA 333435"], registrationSetting.getReg());
    });

    it("should only take these format CK 345-235", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CK 345-235"]);

        assert.deepEqual(["CK 345-235"], registrationSetting.getReg());
    });

    it("should only take these format CY 123-45", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg([ "CY 123-45"]);

        assert.deepEqual(["CY 123-45"], registrationSetting.getReg());
    });
});

describe("The localStorage function", function() {
    it("should store registration that has been added for Cape Town", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CA 333435",]);

        assert.deepEqual(["CA 333435"], registrationSetting.getReg());
    
    });

    it("should store registration that has been added for Belville", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CY 123-456",]);

        assert.deepEqual(["CY 123-456"], registrationSetting.getReg());
    
    });

    it("should store registration that has been added for Malmesbury", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CK 123-45",]);

        assert.deepEqual(["CK 123-45"], registrationSetting.getReg());
    
    });

    it("should store registration that has been added for Belville", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CY 123-456","CY 123-45","CY 232425"]);

        assert.deepEqual(["CY 123-456","CY 123-45","CY 232425"], registrationSetting.getReg());
    
    });

    it("should return/show registration from Malmesbury", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CK 123-45","CK 123456","CK 232-425"]);

        assert.deepEqual(["CK 123-45","CK 123456","CK 232-425"], registrationSetting.getReg());
    
    });

    it("should return/show registration from Cape Town", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CA 333435","CA 123-456","CA 123-45"]);

        assert.deepEqual(["CA 333435","CA 123-456","CA 123-45"], registrationSetting.getReg());
    
    });
   });

   describe("The error function", function() {
    it("should return Please enter valid registration number!", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CA 33343523445",]);

        assert.deepEqual(["CA 33343523445"], registrationSetting.getReg());
    
    });

    it("should return Please select the town!", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg([""]);

        assert.deepEqual([""], registrationSetting.getReg());
    
    });

    it("should return There is no matching registration number of that town at the current moment! if the town selected is not there", function(){
       
        let registrationSetting = Registration();

        registrationSetting.setReg(["CK 123-45", "CY 123-456"]);

        assert.deepEqual(["CK 123-45", "CY 123-456"], registrationSetting.getReg());
    
    });
});

//    ,"CK 123-45","CY 123-456"