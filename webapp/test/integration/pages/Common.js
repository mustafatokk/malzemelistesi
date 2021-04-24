sap.ui.define([
    "sap/ui/test/Opa5",
    "com/kale/malzemelistesi/malzemelistesi/localService/mockserver"
  ], function (Opa5, mockserver) {
    "use strict";
  
    return Opa5.extend("com.kale.malzemelistesi.malzemelistesi.test.integration.pages.Common", { 
        iStartMyApp: function () {
            var sPath = sap.ui.require.toUrl("com/kale/malzemelistesi/malzemelistesi/test");
            return this.iStartMyAppInAFrame(sPath + "/flpSandboxMockServer.html#masterDetail-display");
        }
    });
  }
);