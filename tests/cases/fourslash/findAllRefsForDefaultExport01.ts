/// <reference path='fourslash.ts'/>

////export default class [|DefaultExportedClass|] {
////}
////
////var x: [|DefaultExportedClass|];
////
////var y = new [|DefaultExportedClass|];
////
////namespace [|DefaultExportedClass|] {
////    var local = 100;
////}

let ranges = test.ranges()
for (let range of ranges) {
    goTo.position(range.start);

    for (let expectedReference of ranges) {
        verify.referencesAtPositionContains(expectedReference);
    }
}