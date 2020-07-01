function init() {
    setup();
}



function setup() {

    var mfSel = document.getElementById("mfSel");
    var modelSel = document.getElementById("modelSel")
    var versionSel = document.getElementById("versionSel")

    for(var mf in fleetSalesObject) {
           mfSel.options[mfSel.options.length] = new Option(mf,mf)

    }

  
    // setting up onchange - alternative method
    mfSel.onchange = function () {
        modelSel.length = 1; // remove all but first 

        for(var model in fleetSalesObject[this.value] ) {
            modelSel.options[modelSel.options.length] = new Option(model,model)
        }

    }

    modelSel.onchange = function () {

        versionSel.length = 1;

        var versions = fleetSalesObject[mfSel.value][this.value];
        for(var i = 0; i < versions.length; i++) {

            versionSel.options[versionSel.options.length]=new Option(versions[i],versions[i])
        }

    }

}