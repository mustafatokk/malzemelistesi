QUnit.config.autostart = false;

sap.ui.define([
	"sap/ui/test/Opa5",
    "com/kale/malzemelistesi/malzemelistesi/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"com/kale/malzemelistesi/malzemelistesi/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.kale.malzemelistesi.malzemelistesi.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "com.kale.malzemelistesi.malzemelistesi",
					entitySet: "MaterialSet"
				}
			}
		}
	});
});