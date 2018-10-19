function toggleHidden(elementID) {
    /*
    Takes an element ID as an argument and will mark it as hidden if its not hidden
    and mark it as not hidden if its hidden
     */
    var x = document.getElementById(elementID);
    if (x.hasAttribute('hidden')) {
        x.removeAttribute('hidden')
    } else {
        x.setAttribute('hidden', true)
    }
}

function replaceAttribute(elementID, existingAttribute, replacementAttribute) {
    /*
    Finds an element by id on the page, validates it has the specified attribute and
    replaces that attribute
     */
    var element = document.getElementById(elementID);

    if (element.classList.contains(existingAttribute)) {
        element.classList.remove(existingAttribute);
        element.classList.add(replacementAttribute);
    } else {
        console.log('Element ' + existingAttribute + ' is not applied on ' + elementID + '!')
    }
}