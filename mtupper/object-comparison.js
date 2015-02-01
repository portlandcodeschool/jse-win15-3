/**
 * Created by michaelt on 1/31/15.
 */

var testObj1 = {
    prop1: "propertyOne",
    prop2: "propertyTwo",
    prop3: "propertyThree",
    inner: {
        iProp1: "innerPropertyOne",
        iProp2: "innerPropertyTwo",
        iProp3: "innerPropertyThree"
    }
};

var testObj2 = {
    prop1: "property1",
    prop2: "property2",
    prop3: "property3",
    inner: {
        iProp1: "innerPropertyOne",
        iProp2: "innerPropertyTwo",
        iProp3: "innerPropertyThree"
    }
};

function copy(obj) {
    var newObj = {};
    for (var prop in obj) {
        newObj[prop] = obj[prop];
    }
    return newObj;
}

function equal(objA, objB) {
    for (var prop in objA) {
        if (objA.hasOwnProperty(prop) != objB.hasOwnProperty(prop)) {
            return false;
        }
        if (typeof objA[prop] != 'object' && objA[prop] != objB[prop]) {
            return false;
        }
    }
    return true;
}

function similar(objA, objB) {
    for (var prop in objA) {
        if (objA.hasOwnProperty(prop) != objB.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}